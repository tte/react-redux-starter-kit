import constants from '../constants'


export default function isFetching(state, action) {
  switch(action.type) {
    case constants.<%= pascalEntityName.toUpperCase() %>__IN_PROGRESS:
      return {
        ...state,
        meta: {
          ...state.meta,
          isFetching: true
        }
      }
    case constants.<%= pascalEntityName.toUpperCase() %>__FAILED:
    case constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEM_RESPONSE:
    case constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMs_RESPONSE:
    case constants.<%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS:
      return {
        ...state,
        meta: {
          ...state.meta,
          isFetching: false
        }
      }
    default:
      return state
  }
}
