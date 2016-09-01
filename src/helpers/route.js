import { ROUTE_PREFIX } from '../constants'

/**
 * [createRoute - create route with prefix constant]
 * @param  {String} route
 * @return {String}
 */
export function createRoute(route) {
  return ROUTE_PREFIX.length
    ? `/${ROUTE_PREFIX}${route}`
    : route
}

export default {
  createRoute,
}
