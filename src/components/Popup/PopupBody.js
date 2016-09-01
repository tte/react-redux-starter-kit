import React from "react"


export default function PopupBody(props) {
  const { body } = props
  return (
    <div className="modal-body">
      { body }
    </div>
  )
}

PopupBody.PropTypes = {
  body: React.PropTypes.element.isRequired
}
