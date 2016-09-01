import React from 'react'
import { capitalize } from 'helpers/utils'


export default function FormCheckbox(props) {
  const { name, value, title, changeHandler } = props
  return (
    <div className="form-group">
      <div className="checkbox">
        <label>
          <input
            name={name}
            type="checkbox"
            checked={value}
            onChange={ (e) =>  changeHandler({ name }, e.target.checked) }
          />
          {capitalize(title)}
        </label>
      </div>
    </div>
  )
}

FormCheckbox.PropTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.bool.isRequired,
  changeHandler: React.PropTypes.func.isRequired
}
