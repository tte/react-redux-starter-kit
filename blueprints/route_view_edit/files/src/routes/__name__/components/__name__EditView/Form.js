import React from 'react'
import FormError from 'components/FormError'
import FormFields from './FormFields'
import FormControls from './FormControls'


export default function Form(props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.onSubmit()
    }}>
      <FormError {...props}/>
      <FormFields {...props} />
      <FormControls/>
    </form>
  )
}

Form.PropTypes = {
  onSubmit: React.PropTypes.func
}

