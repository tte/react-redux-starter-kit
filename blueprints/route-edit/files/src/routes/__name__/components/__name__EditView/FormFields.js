import React from 'react'
import FormInput from 'components/FormFields/FormInput'


export default function FormFields(props) {
  const {
    onTextFieldChange,
    form } = props
  return (
    <div>
      <FormInput
        name='name'
        label='name'
        value={form.name}
        changeHandler={ onTextFieldChange.bind(null, { name: 'name' }) }
      />
    </div>
  )
}

FormFields.PropTypes = {
  onTextFieldChange: React.PropTypes.func,
  form: React.PropTypes.object
}
