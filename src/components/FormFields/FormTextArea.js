import React from 'react'
import { capitalize } from 'helpers/utils'


export default function FormTextArea(props) {
  const {
    label,
    name,
    type,
    value,
    placeholder,
    changeHandler,
    disabled,
    columnSize,
    rows } = props
  return (
    <div className="form-group">
      <div className="row">
        <div className={`col-xs-${columnSize || 4}`}>
          <label htmlFor={name}>{capitalize(label)}</label>
          <textarea
            id={name}
            type={type || 'text'}
            value={value}
            className="form-control"
            placeholder={placeholder}
            disabled={disabled || false}
            onChange={(e) => changeHandler(e.target.value)}
            rows={rows || 3}
          />
        </div>
      </div>
    </div>
  )
}


FormTextArea.PropTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  changeHandler: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  rows: React.PropTypes.number,
  columnSize: React.PropTypes.number
}
