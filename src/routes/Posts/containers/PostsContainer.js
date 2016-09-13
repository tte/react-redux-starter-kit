import { connect } from 'react-redux'
import actions from '../actions'
import PostsView from '../components/PostsView'

const mapStateToProps = ({ posts: { items, sort, filters, pagination, meta } }) => ({
  items,
  sort,
  filters,
  meta,
  showPagination: !!pagination
})

export default connect(mapStateToProps, actions)(PostsView)
