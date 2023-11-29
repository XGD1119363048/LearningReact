import React from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/films' activeClassName='xgd-active'>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName='xgd-active'>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName='xgd-active'>我的</NavLink>
        </li>
      </ul>
    </div>
  )
}
