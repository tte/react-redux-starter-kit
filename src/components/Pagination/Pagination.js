import React from 'react'


export default function Pagination(props) {
  const { handleClick, show } = props
  return show
    ? <div>
        <button className="btn btn-primary" onClick={handleClick}>
          Load more
        </button>
      </div>
    : false
}

Pagination.PropTypes = {
  handleClick: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool.isRequired
}
