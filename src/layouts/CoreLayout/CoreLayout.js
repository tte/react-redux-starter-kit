import React from 'react'
import Header from '../../components/Header'
import '../../styles/core.scss'


export const CoreLayout = (props) => {
  const { children, location } = props
  return (
    <div>
      <Header location={location}/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired,
}

export default CoreLayout
