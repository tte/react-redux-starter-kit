export const APP_NAME = 'Your app name'
export const BASE_URL = (process.env.NODE_ENV === 'production' ? window.location.origin : 'https://jsonplaceholder.typicode.com')
export const API_URL = `${BASE_URL}`
export const ROUTE_PREFIX = 'admin'
export const LOCAL_STORAGE_CREDENTIALS = '_your_awesome_safe_name'
export const SORT_BY_FIELD = 'SORT_BY_FIELD'
export const SORT_TYPE_ASC = 'asc'
export const SORT_TYPE_DESC = 'desc'
export const FILTER_BY_FIELD = 'FILTER_BY_FIELD'

export const REDUCERS_INIT_STATE = {
  items: [],
  error: null,
  sort: [],
  filters: [],
  pagination: null,

  meta: {
    isFetching: false
  }
}

export const HEADER_ROUTES = ['/', 'posts']

export const HEADER_ROUTES_LABELS = {
  '/': 'Home'
}

export default {
  APP_NAME,
  BASE_URL,
  API_URL,
  ROUTE_PREFIX,
  LOCAL_STORAGE_CREDENTIALS,
  SORT_BY_FIELD,
  SORT_TYPE_ASC,
  SORT_TYPE_DESC,
  FILTER_BY_FIELD,
  REDUCERS_INIT_STATE,
  HEADER_ROUTES,
  HEADER_ROUTES_LABELS
}
