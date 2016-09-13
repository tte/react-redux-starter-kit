import { connect } from 'react-redux'
import actions from '../actions'
import PostsEditView from '../components/PostsEditView'

const mapStateToProps = ({ posts: { form, error, meta } }) => ({
  form,
  error,
  meta
})

export default connect(mapStateToProps, actions)(PostsEditView)
