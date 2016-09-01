import { injectReducer } from '../../store/reducers'
import { fetchItems } from './actions/view'

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
