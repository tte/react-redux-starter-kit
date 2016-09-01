import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'


export default function DropdownMenu(props) {
  const { menuItems, toggleHandler, selectHandler } = props
  const items = menuItems.map((item,i) =>
    <DropdownMenuItem
      key={i}
      name={item.label}
      handler={() => {
        selectHandler(item)
        toggleHandler()
      }}
    />)
  return (
    <ul
      role="menu"
      className="dropdown-menu"
      aria-labelledby="dropdown-basic-1"
    >
      {items}
    </ul>
  )
}

DropdownMenu.PropTypes = {
  menuItems: React.PropTypes.array.isRequired,
  toggleHandler: React.PropTypes.func.isRequired,
  selectHandler: React.PropTypes.func.isRequired
}
