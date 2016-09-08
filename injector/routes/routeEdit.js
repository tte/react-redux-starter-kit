import recast from 'recast'
import injector from '../lib'
import constructors from '../lib/constructors'
import child_process from 'child_process'
const b = recast.types.builders


/**
 * [handler]
 * @param  {string} name [description]
 * @return {func}     [description]
 */
export function handler(name) {
  return function(ast) {
    const imports = [
      {
        "import_default": name,
        "import_scope": [`${name}EditRoute`],
        "package": `./${name}`
      }
    ]

    const routes = [
      {
        func: name,
        arguments: ['store']
      },
      {
        func: `${name}EditRoute`,
        arguments: ['store']
      }
    ]

    ast = constructors.addImports(ast, imports)
    ast = insertRoutes(ast, routes)

    return ast
  }
}

/**
 * [insertRoute]
 * @param  {Object} ast
 * @param  {Object[]} route
 * @return {Object}
 */
function insertRoutes(ast, routes) {
  recast.visit(ast, {
    visitProperty: function(path) {
      const { node } = path
      if(node.key.name === 'childRoutes' && node.value.type === 'ArrayExpression') {
        routes.forEach(route => {
          const inject = b.callExpression(
            b.identifier(route.func),
            route.arguments.map(item => b.identifier(item))
          )
          const isExists = node.value.elements
            .filter(item =>
              item.type === 'CallExpression' &&
              item.callee.name === route.func &&
              item.arguments
                .filter(_item => route.arguments.includes(_item.name))
                .length
            )
            .length

          if(!isExists)
            node.value.elements.push(inject)
        })
      }

      this.traverse(path)
    }
  })

  return ast
}

/**
 * [run]
 * @param  {string} name
 * @param  {bool} lint
 */
export default function run(name, noLint = false) {
  if(!name) throw new Error('error: injector `name` is required')

  const filename = './src/routes/index.js'

  injector(filename, handler(name))
    .then(filename => {
      if(filename && !noLint)
        child_process.execSync(`eslint ${filename} --fix`)
      })
    .catch(e => console.log('error:', e))
}
