import React from 'react'
import { Link } from 'react-router'
import { createRoute } from '../../../helpers/route'


export default function PostsViewTableActions(props) {
  const { id } = props
  return (
    <div>
      <Link to={createRoute(`/posts/edit/${id}`)} className="btn btn-primary">
        Edit
      </Link>
    </div>
  )
}

PostsViewTableActions.propTypes = {
  id: React.PropTypes.any.isRequired
}
