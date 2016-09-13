import React from 'react'
import LoadingOverlay from 'components/LoadingOverlay'
import Form from './Form'


export default function View(props) {
  const { meta: { isFetching } } = props
  return (
    <div>
      <Form {...props}/>
      <LoadingOverlay show={isFetching} />
    </div>
  )
}

View.PropTypes = {
  meta: React.PropTypes.shape({
    isFetching: React.PropTypes.bool.isRequired
  })
}
