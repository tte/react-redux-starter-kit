import { REDUCERS_INIT_STATE } from 'constants'
import constants from '../constants'
import isFetching from './isFetching'


const ACTION_HANDLERS = {
  [constants.<%= pascalEntityName.toUpperCase() %>__IN_PROGRESS]: state => ({
    ...state,
    error: null
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__FAILED]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE]: (state, { payload }) => ({
    ...state,
    items: payload,
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK]: (state, { link }) => ({
    ...state,
    pagination: link
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS]: (state, { payload }) => ({
    ...state,
    items: state.items.concat(payload),
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__INIT_FORM]: (state, { payload }) => ({
    ...state,
    form: payload || constants.<%= pascalEntityName.toUpperCase() %>__FORM_DEFAULT_STATE,
    error: null
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__FETCH_ITEM_RESPONSE]: (state, { payload }) => ({
    ...state,
    form: payload,
  }),
  [constants.<%= pascalEntityName.toUpperCase() %>__FORM_FIELD_CHANGE]: (state, { payload }) => ({
    ...state,
    form: {
      ...state.form,
      ...payload
    }
  })
}

export default function <%= pascalEntityName.toLowerCase() %> (state = REDUCERS_INIT_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  const nextState = handler ? handler(state, action) : state
  return isFetching(nextState, action)
}
