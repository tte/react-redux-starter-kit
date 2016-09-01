import fetch from 'isomorphic-fetch'

/**
 * [request]
 * @param  {String} url
 * @param  {String} method ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
 * @param  {String} body
 * @param  {String} token  [Auth token if needed]
 * @return {Promise}
 */
export function request(url, method, body, token = null) {
  return fetch(url, {
    method: method,
    headers: token
      ? { ...getHeaders(), token }
      : getHeaders(),
    body: body
  })
}

/**
 * [getHeaders]
 * @return {Object}
 */
export function getHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

export default {
  request,
  getHeaders
}
