import { injectReducer } from '../../store/reducers'
import { fetchItems } from './actions/view'
import { initForm, fetchItem } from './actions/edit'

export default (store) => ({
  path: '<%= dashesEntityName %>',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./containers/<%= pascalEntityName %>Container').default
      const reducer = require('./reducers').default
      injectReducer(store, { key: '<%= pascalEntityName.toLowerCase() %>', reducer })
      store.dispatch(fetchItems())
      cb(null, container)
    }, '<%= pascalEntityName.toLowerCase() %>')
  }
})

export function <%= pascalEntityName %>EditRoute(store) {
  return {
    path: '<%= pascalEntityName.toLowerCase() %>/edit/:id',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const container = require('./containers/<%= pascalEntityName %>EditContainer').default
        const reducer = require('./reducers').default
        injectReducer(store, { key: '<%= pascalEntityName.toLowerCase() %>', reducer })
        const { params: { id } } = nextState
        store.dispatch(initForm())
        store.dispatch(fetchItem(id))
        cb(null, container)
      }, '<%= pascalEntityName.toLowerCase() %>')
    }
  }
}
