import React from 'react'
import { createRoute } from 'helpers/route'
import {
  HEADER_ROUTES,
  HEADER_ROUTES_LABELS } from '../../constants'
import HeaderItem from './HeaderItem'


export const Header = ({ location }) => (
  <div>
    <nav className="navbar navbar-default navbar-static-top navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Centfriend</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {
              HEADER_ROUTES.map((item, i) => {
                const path = createRoute(`/${item}`)
                return <HeaderItem
                  key={i}
                  path={path}
                  name={HEADER_ROUTES_LABELS[item]}
                  isActive={path === location.pathname}
                />
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

Header.PropTypes = {
  location: React.PropTypes.object.isRequired
}

export default Header
