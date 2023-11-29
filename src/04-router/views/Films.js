import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'

import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{ height: '200px', background: 'yellow' }}>大轮播</div>
        <ul>
          <li>
            <NavLink to='/films/nowplaying'>正在热映</NavLink>
          </li>
          <li>
            <NavLink to='/films/comingsoon'>即将上映</NavLink>
          </li>
        </ul>

        {/* 路由配置 嵌套路由 */}
        <Switch>
          <Route path='/films/nowplaying' component={NowPlaying} />
          <Route path='/films/comingsoon' component={ComingSoon} />
          <Redirect from='/films' to='/films/nowplaying' />
        </Switch>
      </div>
    )
  }
}
