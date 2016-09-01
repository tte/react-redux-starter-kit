import {
  validateResponse,
  handleError,
  isValidateError,
  parseLinkHeader } from 'helpers/response'
import { inProgress, failed } from './index'
import constants from '../constants'
import { request } from 'helpers/request'


export function fetchItems(url = constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_URL, action = fetchItemsResponse) {
  return (dispatch, getState) => {
    dispatch(inProgress())
    return new Promise(function(resolve, reject) {
      const xhr = request(url, 'GET')
        .then(validateResponse)
      const json = xhr.then(res => res.json())

      return json
        .then(payload => dispatch(action(payload)))
        .then(result =>
          xhr.then(res =>
            dispatch(updatePaginationLink(res.headers.get('Link')))
        ))
        .then(resolve)
        .catch(handleError)
        .then(json => isValidateError(json) ? dispatch(failed(json)) : false)
    })
  }
}

export function updatePaginationLink(linkHeader = null) {
  const links = parseLinkHeader(linkHeader)
  return {
    type: constants.<%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK,
    link: links && links.next
      ? links.next
      : links
  }
}

export function fetchItemsResponse(json) {
  return {
    type: constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE,
    payload: json
  }
}

export function paginate() {
  return (dispatch, getState) => {
    const { <%= pascalEntityName.toLowerCase() %> } = getState()
    if(!<%= pascalEntityName.toLowerCase() %>.pagination) return false

    dispatch(fetchItems(<%= pascalEntityName.toLowerCase() %>.pagination, paginationItemsResponse))
  }
}

export function paginationItemsResponse(json) {
  return {
    type: constants.<%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS,
    payload: json
  }
}


export default {
  fetchItems,
  fetchItemsResponse,
  updatePaginationLink,
  paginate,
  paginationItemsResponse
}
