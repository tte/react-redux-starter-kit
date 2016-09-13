import { injectReducer } from 'store/reducers'
import { fetchItems } from './actions/view'
import { initForm, fetchItem } from './actions/edit'

export default (store) => ({
  path: 'posts',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./containers/PostsContainer').default
      const reducer = require('./reducers').default
      injectReducer(store, { key: 'posts', reducer })
      store.dispatch(fetchItems())
      cb(null, container)
    }, 'posts')
  }
})

export function PostsEditRoute(store) {
  return {
    path: 'posts/edit/:id',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const container = require('./containers/PostsEditContainer').default
        const reducer = require('./reducers').default
        injectReducer(store, { key: 'posts', reducer })
        const { params: { id } } = nextState
        store.dispatch(initForm())
        store.dispatch(fetchItem(id))
        cb(null, container)
      }, 'posts')
    }
  }
}
