import React from 'react'
import { Link } from 'react-router'
import { createRoute } from '../../../helpers/route'


export default function <%= pascalEntityName %>ViewTableActions(props) {
  const { id } = props
  return (
    <div>
      <Link to={createRoute(`/<%= pascalEntityName.toLowerCase() %>/edit/${id}`)}>
        Edit
      </Link>
    </div>
  )
}

<%= pascalEntityName %>ViewTableActions.propTypes = {
  id: React.PropTypes.any.isRequired
}
