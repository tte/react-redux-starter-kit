import React from 'react'


export default function LoadingOverlay({ show }) {
  return (
    <div className={
          "container__loading" +
          (show ? ' container__loading--active' : '')
        }
      >
    </div>
  )
}

LoadingOverlay.propTypes = {
  show: React.PropTypes.bool.isRequired
}
