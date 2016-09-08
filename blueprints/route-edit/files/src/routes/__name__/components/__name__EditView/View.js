import React from 'react'
import LoadingOverlay from 'components/LoadingOverlay'
import Form from './Form'


export default function View(props) {
  const { isFetching } = props
  return (
    <div>
      <Form {...props}/>
      <LoadingOverlay show={isFetching} />
    </div>
  )
}

View.PropTypes = {
  isFetching: React.PropTypes.bool
}
