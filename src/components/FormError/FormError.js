import React from 'react'


export default function FormError(props) {
  const { error } = props
  return error
    ? (<div className="alert alert-danger" role="alert">
        <h4>Error: { error.code }</h4>
        <p>{ error.message }</p>
      </div>)
    : false
}

FormError.PropTypes = {
  error: React.PropTypes.shape({
    code: React.PropTypes.string,
    message: React.PropTypes.string
  })
}
