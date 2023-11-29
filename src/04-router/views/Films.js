import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'

import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

import style from './css/Film.module.css'

export default class Films extends Component {
  render() {
    return (
      <div className={style.film + ' aaaaa'}>
        <div style={{ height: '200px', background: 'yellow' }}>大轮播</div>
        <ul>
          <li>
            <NavLink to='/films/nowplaying' activeClassName={style.active}>正在热映</NavLink>
          </li>
          <li>
            <NavLink to='/films/comingsoon' activeClassName={style.active}>即将上映</NavLink>
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
