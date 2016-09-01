import React from "react"


export default function PopupFooter(props) {
  const { popupClose } = props
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-default"
        data-dismiss="modal"
        onClick={ (e) => { e.preventDefault(); popupClose() } }
      >
        Close
      </button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  )
}

PopupFooter.PropTypes = {
  popupClose: React.PropTypes.func.isRequired
}
