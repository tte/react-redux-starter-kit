import fs from 'fs'
import recast from 'recast'

/**
 * [injector]
 * @param  {string} filename
 * @param  {Promise} handler
 */
export default function injector(filename, handler) {
  return new Promise(function(resolve) {
    fs.readFile(filename, 'utf-8', function(err, data) {
    if (err) throw Error(err)

      fs.writeFile(filename, parser(data, handler), 'utf-8', function (err) {
        if (err) throw Error(err)
        console.log(`injector: file modified ${filename}`)
        resolve(filename)
      })
    })
  })
}

/**
 * [parser - create AST, modify and return]
 * @param  {string} data - file content
 * @param  {function} handler - modifier
 * @return {string}
 */
export function parser(data, handler) {
  const output = handler(recast.parse(data))
  return recast.prettyPrint(output, { tabWidth: 2 }).code
}
