import recast from 'recast'
import injector from '../lib'
import constructors from '../lib/constructors'
import path from 'path'
import child_process from 'child_process'
const b = recast.types.builders
import _debug from 'debug'
const debug = _debug('app:injector')


/**
 * [handler]
 * @param  {string} name
 * @return {func}
 */
export function routesHandler(name) {
  return ast => {
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
 * @param  {Object[]} routes
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
            route.arguments.map(item => b.identifier(item)))
          const isExists = node.value.elements
            .filter(item =>
              item.type === 'CallExpression' &&
              item.callee.name === route.func &&
              item.arguments
                .filter(_item => route.arguments.includes(_item.name))
                .length
            ).length

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
 * [constantsHandler]
 * @param  {string} name
 * @return {function}
 */
export function constantsHandler(name) {
  return ast => {
    ast = pushToConstVariableArray(
      ast,
      'HEADER_ROUTES',
      b.literal(name.toLowerCase()),
      true
    )
    return ast
  }
}

/**
 * [pushToConstVariableArray -
 *   search for named variable(var/const/let) `constName`,
 *   check for unique flag,
 *   insert]
 * @param  {Object}  ast
 * @param  {String}  constName
 * @param  {Object}  el
 * @param  {Boolean} unique
 * @return {Object} modified ast
 */
export function pushToConstVariableArray(ast, constName, el, unique = false) {
  recast.visit(ast, {
    visitVariableDeclarator: function(path) {
      const { node } = path
      if(node.id.name === constName) {
        let isExists = unique
          ? node.init.elements.filter(item =>
            item.value === el.value.toLowerCase()).length
          : false

        if(!unique || (unique && !isExists))
          node.init.elements.push(el)

        return false
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
export default function run(name, lint = true) {
  if(!name) throw new Error('error: injector `name` is required')

  injector('./src/routes/index.js', routesHandler(name))
    .then(lintHandler(lint))
    .catch(errorHandler)

  injector('./src/constants/index.js', constantsHandler(name))
    .then(lintHandler(lint))
    .catch(errorHandler)
}

/**
 * [errorHandler
 * @param  {Object} err [description]
 */
export function errorHandler(err) {
  return debug('injecting error: %s', console.log(e))
}

/**
 * [lintHandler]
 * @param  {bool} lint
 * @return {function}
 */
export function lintHandler(lint) {
  return filename => {
    if(filename && lint) {
      const lintConfigPath = path.resolve(__dirname, '../../.eslintrc')
      child_process.execSync(`eslint -c ${lintConfigPath} ${filename} --fix`)
    }
  }
}
