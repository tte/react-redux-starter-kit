import React from 'react'
import { Link } from 'react-router'


export default function HeaderItem({ path, name, isActive }) {
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={path}>
        {name.toUpperCase()}
      </Link>
    </li>
  )
}

HeaderItem.PropTypes = {
  path: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool.isRequired
}
