import { REDUCERS_INIT_STATE } from 'constants'
import constants from '../constants'
import isFetching from './isFetching'


const ACTION_HANDLERS = {
  [constants.POSTS__IN_PROGRESS]: state => ({
    ...state,
    error: null
  }),
  [constants.POSTS__FAILED]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [constants.POSTS__FETCH_ITEMS_RESPONSE]: (state, { payload }) => ({
    ...state,
    items: payload,
  }),
  [constants.POSTS__UPDATE_PAGINATION_LINK]: (state, { link }) => ({
    ...state,
    pagination: link
  }),
  [constants.POSTS__PAGINATION_ITEMS]: (state, { payload }) => ({
    ...state,
    items: state.items.concat(payload),
  }),
  [constants.POSTS__INIT_FORM]: (state, { payload }) => ({
    ...state,
    form: payload || constants.POSTS__FORM_DEFAULT_STATE,
    error: null
  }),
  [constants.POSTS__FETCH_ITEM_RESPONSE]: (state, { payload }) => ({
    ...state,
    form: payload,
  }),
  [constants.POSTS__FORM_FIELD_CHANGE]: (state, { payload }) => ({
    ...state,
    form: {
      ...state.form,
      ...payload
    }
  })
}

export default function posts (state = REDUCERS_INIT_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  const nextState = handler ? handler(state, action) : state
  return isFetching(nextState, action)
}
