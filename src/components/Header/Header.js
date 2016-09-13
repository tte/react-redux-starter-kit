import React from 'react'
import { createRoute } from 'helpers/route'
import {
  APP_NAME,
  HEADER_ROUTES,
  HEADER_ROUTES_LABELS } from '../../constants'
import HeaderItem from './HeaderItem'
import { capitalize } from 'helpers/utils'


export const Header = ({ location }) => (
  <div>
    <nav className="navbar navbar-default navbar-static-top navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">{APP_NAME}</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {
              HEADER_ROUTES.map((item, i) => {
                const path = createRoute(item === '/' ? item : `/${item}`)
                return <HeaderItem
                  key={i}
                  path={path}
                  name={HEADER_ROUTES_LABELS[item] || item}
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
