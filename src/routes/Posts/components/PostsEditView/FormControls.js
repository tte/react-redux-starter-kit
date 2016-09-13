import React from 'react'
import { Link } from 'react-router'
import { createRoute } from '../../../../helpers/route'


export default function FormControls(props) {
  return (
    <div className="form-controls">
      <Link to={createRoute('/posts')} className="btn btn-default">
        Back
      </Link>
      <button type="submit" className="btn btn-primary">Save</button>
    </div>
  )
}
