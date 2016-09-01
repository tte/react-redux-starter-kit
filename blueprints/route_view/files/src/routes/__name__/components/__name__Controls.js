import React from 'react'
import { Link } from 'react-router'
import { createRoute } from '../../../helpers/route'


export default function <%= pascalEntityName %>Controls(props) {
  return (
    <div>
      <Link to={createRoute('/<%= pascalEntityName.toLowerCase() %>/create')}>
        Create
      </Link>
    </div>
  )
}
