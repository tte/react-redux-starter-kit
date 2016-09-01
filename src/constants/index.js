export const BASE_URL = process.env.NODE_ENV === 'production'
  ? window.location.origin
  : 'http://example.com'

export const API_URL = `${BASE_URL}/admin`
export const ROUTE_PREFIX = 'admin'

export const LOCAL_STORAGE_CREDENTIALS = '_your_awesome_safe_name'

export const SORT_BY_FIELD = 'SORT_BY_FIELD'
export const SORT_TYPE_ASC = 'asc'
export const SORT_TYPE_DESC = 'desc'

export const FILTER_BY_FIELD = 'FILTER_BY_FIELD'

export const REDUCERS_INIT_STATE = {
  items: [],
  isFetching: false,
  error: null,
  sort: [],
  filters: [],
  pagination: null
}

export const HEADER_ROUTES = ['home']
export const HEADER_ROUTES_LABELS = {
  'home': 'Home'
}
