import React from 'react'
import PopupHeader from './PopupHeader'
import PopupBody from './PopupBody'
import PopupFooter from './PopupFooter'


export default function Popup(props) {
  const { show, popupClose, footer } = props
  return (
    <div
      className={"modal fade" + (show ? ' in popup__content--visible' : '')}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="gridSystemModalLabel"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <PopupHeader {...props}/>
          <PopupBody {...props} />
          {footer ? <PopupFooter {...props}/> : false }
        </div>
      </div>
    </div>
  )
}

Popup.PropTypes = {
  show: React.PropTypes.bool.isRequired,
  popupClose: React.PropTypes.func,
  footer: React.PropTypes.element
}
