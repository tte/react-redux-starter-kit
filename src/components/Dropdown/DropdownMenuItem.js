import React from 'react'


export default function DropdownMenuItem(props) {
  const { name, handler } = props
  return (
    <li role="presentation">
      <a
        href="#"
        role="menuitem"
        tabIndex="-1"
        onClick={(e) => {
          e.preventDefault()
          handler()
        }}
      >
        {name}
      </a>
    </li>
  )
}

DropdownMenuItem.PropTypes = {
  name: React.PropTypes.string.isRequired,
  handler: React.PropTypes.func.isRequired,
}
