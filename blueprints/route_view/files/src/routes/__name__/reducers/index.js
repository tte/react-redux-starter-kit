import { REDUCERS_INIT_STATE } from 'constants'
import {
  <%= pascalEntityName.toUpperCase() %>__FAILED,
  <%= pascalEntityName.toUpperCase() %>__IN_PROGRESS,
  <%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE,
  <%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK,
  <%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS } from '../constants'

const ACTION_HANDLERS = {
  [<%= pascalEntityName.toUpperCase() %>__IN_PROGRESS]: (state, action) => {
    return {
      ...state,
      isFetching: true,
      error: null
    }
  },
  [<%= pascalEntityName.toUpperCase() %>__FAILED]: (state, { payload }) => {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  },
  [<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE]: (state, { payload }) => ({
    ...state,
    items: payload,
    isFetching: false
  }),
  [<%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK]: (state, { link }) => ({
    ...state,
    pagination: link
  }),
  [<%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS]: (state, { payload }) => ({
    ...state,
    items: state.items.concat(payload),
    isFetching: false
  })
}

export default function <%= pascalEntityName.toLowerCase() %> (state = REDUCERS_INIT_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
