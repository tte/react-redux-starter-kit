import fetch from 'isomorphic-fetch'


export function request(url, method, body, token = null) {
  return fetch(url, {
    method: method,
    headers: token
      ? { ...getHeaders(), token }
      : getHeaders(),
    body: body
  })
}

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
