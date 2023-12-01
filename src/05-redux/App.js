import React, { Component } from 'react'
import MRouter from './router/IndexRouter'

import Tabbar from './components/Tabbar'

import './views/css/App.css'

import store from './redux/store'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isShow: store.getState().TabbarReducer.show
    }
  }

  // store.subscribe 订阅
  componentDidMount() {
    store.subscribe(() => {
      console.log('app 中订阅', store.getState())
      this.setState({
        isShow: store.getState().TabbarReducer.show
      })
    })
  }
  
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          {this.state.isShow && <Tabbar/>}
          {/* {store.getState().show && <Tabbar/>} */}
        </MRouter>
      </div>
    )
  }
}

/**
 * /films => Films
 * /cinemas => Cinemas
 * /center => Center
 */
