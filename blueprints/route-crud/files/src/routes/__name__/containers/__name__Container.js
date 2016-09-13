import { connect } from 'react-redux'
import actions from '../actions'
import <%= pascalEntityName %>View from '../components/<%= pascalEntityName %>View'

const mapStateToProps = ({ <%= pascalEntityName.toLowerCase() %>: { items, sort, filters, pagination, meta } }) => ({
  items,
  sort,
  filters,
  meta,
  showPagination: !!pagination
})

export default connect(mapStateToProps, actions)(<%= pascalEntityName %>View)
