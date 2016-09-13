import constants from '../constants'


export default function isFetching(state, action) {
  switch(action.type) {
    case constants.POSTS__IN_PROGRESS:
      return {
        ...state,
        meta: {
          ...state.meta,
          isFetching: true
        }
      }
    case constants.POSTS__FAILED:
    case constants.POSTS__FETCH_ITEM_RESPONSE:
    case constants.POSTS__FETCH_ITEMs_RESPONSE:
    case constants.POSTS__PAGINATION_ITEMS:
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
