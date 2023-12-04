import React, { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'

import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

import style from './css/Film.module.css'

import { Swiper } from 'antd-mobile'
import axios from 'axios'

export default class Films extends Component {

  constructor() {
    super()
    this.state = {
      loopList: []
    }
  }

  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5880847',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.setState({
        loopList: res.data.data.films
      })
    })
  }

  render() {
    return (
      <div className={style.film + ' aaaaa'}>
        {/* <div style={{ height: '200px', background: 'yellow' }}>大轮播</div> */}

        <Swiper autoplay loop>
          {
            this.state.loopList.map(item => <Swiper.Item key={item.filmId}>
              <img style={{
                width: '100%',
                height: '30vh'
              }} src={item.poster} alt={item.name} />
            </Swiper.Item>)
          }
        </Swiper>

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
