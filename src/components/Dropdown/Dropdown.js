import React from 'react'
import DropdownMenu from './DropdownMenu'
import HandleOutside from 'components/OutsideWrapper'


export default function Dropdown(props) {
  const { label, open, toggleHandler, className } = props
  return (
    <HandleOutside
      eventHandler={(e) => {
        if(open) toggleHandler(false)
      }}
      className={className}
      eventTypes={['click']}
    >
      <div
        className={
          "dropdown" +
          (open ? ' open' : '')
        }
      >
        <button
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
          type="button"
          id="dropdown-basic-1"
          className={
            "btn btn-info" +
            (open ? ' dropdown-toggle' : '')
          }
          onClick={(e) => {
            e.preventDefault()
            toggleHandler()
          }}
        >
          {label}&nbsp;
          <span className="caret"></span>
        </button>
        <DropdownMenu {...props}/>
      </div>
    </HandleOutside>
  )
}

Dropdown.PropTypes = {
  open: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  menuItems: React.PropTypes.array.isRequired,
  toggleHandler: React.PropTypes.func.isRequired,
  selectHandler: React.PropTypes.func.isRequired
}
