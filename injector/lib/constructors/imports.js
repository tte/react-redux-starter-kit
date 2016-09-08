import recast from 'recast'

const b = recast.types.builders
const POSITION_END = 'end'

/**
 * [addImports]
 * @param {Object} ast
 * @param {Object[]} arr Array of Objects
 * @param {string} position - start/end
 * @return {Object} [description]
 */
export default function addImports(ast, arr, position = POSITION_END) {
  let importPosition = null
  const exists = []
  recast.visit(ast, {
    visitImportDeclaration: function(path) {
      const { node } = path
      importPosition = node
      position === POSITION_END ? this.traverse(path) : false
      exists.push(node.source.value)
    }
  })
  let id = ast.program.body.indexOf(importPosition)
  if(id === -1) id = 0
  const nodes = arr
    .filter(item => !exists.includes(item.package))
    .map(createImport)
  ast.program.body.splice(id + 1, 0, nodes[0])

  return ast
}

/**
 * [createImport]
 * @param  {Object} payload
 * @return {Object}
 */
export function createImport(payload) {
  return b.importDeclaration(
    getSpecifiers(payload),
    b.literal(payload.package)
  )
}

/**
 * [getSpecifiers]
 * @param  {Object} payload
 * @return {Array}
 */
export function getSpecifiers(payload) {
  const result = []
  if(payload.import_default)
    result.push(getSpecifier('default', payload.import_default))

  return payload.import_scope && payload.import_scope.length
    ? result.concat(payload.import_scope.map(getSpecifier.bind(null, 'scope')))
    : result
}

/**
 * [getSpecifier]
 * @param  {String} type
 * @param  {String} identifier
 * @return {Object}
 */
export function getSpecifier(type, identifier) {
  identifier = b.identifier(identifier)
  switch(type) {
    case 'scope':
      return b.importSpecifier(identifier)
    default:
      return b.importDefaultSpecifier(identifier)
  }
}
