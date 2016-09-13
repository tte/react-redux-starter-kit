import React from 'react'
import { Link } from 'react-router'
import { createRoute } from '../../../helpers/route'


export default function PostsControls(props) {
  return (
    <div>
      <Link to={createRoute('/posts/create')} className="btn btn-success">
        Create
      </Link>
    </div>
  )
}
