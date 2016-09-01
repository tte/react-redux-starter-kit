export const BASE_URL = process.env.NODE_ENV === 'production'
  ? window.location.origin
  : 'http://mylist.aipmedia.ru'

export const API_URL = `${BASE_URL}/admin/api`
export const ROUTE_PREFIX = 'admin'

export const LOCAL_STORAGE_CREDENTIALS = '_your_awesome_safe_name'

export const SORT_BY_FIELD = 'SORT_BY_FIELD'
export const SORT_TYPE_ASC = 'asc'
export const SORT_TYPE_DESC = 'desc'

export const FILTER_BY_FIELD = 'FILTER_BY_FIELD'
export const FILTER_CHANGE_QUERY = 'FILTER_CHANGE_QUERY'
export const FILTER_CHANGE_TARGET = 'FILTER_CHANGE_TARGET'
export const FILTER_TYPE_DEFAULT = ''
export const FILTER_DEFAULT = { target: FILTER_TYPE_DEFAULT, query: '' }

export const REDUCERS_INIT_STATE = {
  items: [],
  isFetching: false,
  error: null,
  sort: [],
  filters: [],
  pagination: null
}

export const HEADER_ROUTES = ['moderation', 'goods', 'stores', 'scrapper']
export const HEADER_ROUTES_LABELS = {
  'moderation': 'New Products',
  'goods': 'Goods',
  'stores': 'Stores',
  'scrapper': 'Scrapper'
}
