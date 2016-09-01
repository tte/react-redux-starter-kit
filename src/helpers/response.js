/**
 * [validateResponse - fetch response code status validation]
 * @param  {Object} res
 * @return {Object}
 */
export function validateResponse(res) {
  if(Math.round(res.status / 100) === 2)
    return res

  throw new validateError('validateResponse error', res)
}

/**
 * [validateError - promise validation error]
 * @param  {String} message
 * @param  {Any} payload
 */
export function validateError(message, payload) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
  this.payload = payload
}

/**
 * [handleError - promisses catch block function]
 * @param  {Error} e
 * @return {Object}
 */
export function handleError(e) {
  return e.hasOwnProperty('payload') && 'json' in e.payload
    ? e.payload.json()
    : { code: e.name, message: e.message }
}

/**
 * [isValidateError]
 * @param  {Any}  payload
 * @return {Boolean}
 */
export function isValidateError(payload) {
  return typeof payload === 'object'
    && payload.hasOwnProperty('code')
    && payload.hasOwnProperty('message')
}

/**
 * [parseLinkHeader - parse response header `Link` for pagination urls]
 * @param  {String} header
 * @return {Object||null}
 */
export function parseLinkHeader(header) {
    if (!header || header.length === 0) return null

    const parts = header.split(',')
    const links = {}

    for(let i=0; i<parts.length; i++) {
      let section = parts[i].split(';')

      if (section.length !== 2)
        throw new Error("section could not be split on ';'")

      let url = section[0].replace(/<(.*)>/, '$1').trim()
      let name = section[1].replace(/rel="(.*)"/, '$1').trim()
      links[name] = url
    }

    return links;
}

export default {
  validateResponse,
  validateError,
  handleError,
  isValidateError,
  parseLinkHeader
}
