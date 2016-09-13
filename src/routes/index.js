import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Posts, { PostsEditRoute } from './Posts'

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [Posts(store), PostsEditRoute(store)]
})

export default createRoutes
