import { API_URL } from '../../../constants'

export const <%= pascalEntityName.toUpperCase() %>__FAILED = '<%= pascalEntityName.toUpperCase() %>__FAILED'
export const <%= pascalEntityName.toUpperCase() %>__IN_PROGRESS = '<%= pascalEntityName.toUpperCase() %>__IN_PROGRESS'

export const <%= pascalEntityName.toUpperCase() %>__FETCH_ITEM_RESPONSE = '<%= pascalEntityName.toUpperCase() %>__FETCH_ITEM_RESPONSE'
export const <%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_URL = `${API_URL}/<%= pascalEntityName.toLowerCase() %>`
export const <%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE = '<%= pascalEntityName.toUpperCase() %>__FETCH_ITEMS_RESPONSE'

export const <%= pascalEntityName.toUpperCase() %>__CREATE = '<%= pascalEntityName.toUpperCase() %>__CREATE'
export const <%= pascalEntityName.toUpperCase() %>__UPDATE = '<%= pascalEntityName.toUpperCase() %>__UPDATE'
export const <%= pascalEntityName.toUpperCase() %>__DELETE = '<%= pascalEntityName.toUpperCase() %>__DELETE'
export const <%= pascalEntityName.toUpperCase() %>__UPDATE_ITEM_RESPONSE = '<%= pascalEntityName.toUpperCase() %>__UPDATE_ITEM_RESPONSE'
export const <%= pascalEntityName.toUpperCase() %>__DELETE_ITEM_RESPONSE = '<%= pascalEntityName.toUpperCase() %>__DELETE_ITEM_RESPONSE'

export const <%= pascalEntityName.toUpperCase() %>__FORM_FIELD_CHANGE = '<%= pascalEntityName.toUpperCase() %>__FORM_FIELD_CHANGE'

export const <%= pascalEntityName.toUpperCase() %>__COLUMNS = ['action']
export const <%= pascalEntityName.toUpperCase() %>__COLUMNS_LABELS = {
  'key' : 'value'
}

export const <%= pascalEntityName.toUpperCase() %>__SORT_FIELD = '<%= pascalEntityName.toUpperCase() %>__SORT_FIELD'
export const <%= pascalEntityName.toUpperCase() %>__SORT_FIELDS = []

export const <%= pascalEntityName.toUpperCase() %>__FILTER_FIELD = '<%= pascalEntityName.toUpperCase() %>__FILTER_FIELD'
export const <%= pascalEntityName.toUpperCase() %>__FILTER_FIELDS = []

export const <%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK = '<%= pascalEntityName.toUpperCase() %>__UPDATE_PAGINATION_LINK'
export const <%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS = '<%= pascalEntityName.toUpperCase() %>__PAGINATION_ITEMS'

export const <%= pascalEntityName.toUpperCase() %>__FORM_DEFAULT_STATE = {
  'key' : 'value'
}
