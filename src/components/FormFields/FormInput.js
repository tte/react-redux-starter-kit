import React from 'react'
import { capitalize } from 'helpers/utils'


export default function FormInput(props) {
  const {
    label,
    name,
    type,
    value,
    placeholder,
    changeHandler,
    disabled,
    columnSize } = props
  return (
    <div className="form-group">
      <div className="row">
        <div className={`col-xs-${columnSize || 4}`}>
          <label htmlFor={name}>{capitalize(label)}</label>
          <input
            id={name}
            type={type || 'text'}
            value={value}
            className="form-control"
            placeholder={placeholder}
            disabled={disabled || false}
            onChange={(e) => changeHandler(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}


FormInput.PropTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  changeHandler: React.PropTypes.func,
  columnSize: React.PropTypes.number
}
