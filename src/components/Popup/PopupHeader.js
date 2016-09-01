import React from "react"


export default function PopupHeader(props) {
  const { popupClose, title } = props
  return (
    <div className="modal-header">
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={ (e) => { e.preventDefault(); popupClose() } }
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 className="modal-title" id="gridSystemModalLabel">{title}</h4>
    </div>
  )
}

PopupHeader.PropTypes = {
  popupClose: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
}
