import { connect } from 'react-redux'
import actions from '../actions'
import <%= pascalEntityName %>EditView from '../components/<%= pascalEntityName %>EditView'

const mapStateToProps = ({ <%= pascalEntityName.toLowerCase() %>: { form, error, meta } }) => ({
  form,
  error,
  meta
})

export default connect(mapStateToProps, actions)(<%= pascalEntityName %>EditView)
