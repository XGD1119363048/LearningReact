import React, { Component } from 'react'
import MRouter from './router/IndexRouter'

import Tabbar from './components/Tabbar'

import './views/css/App.css'
import { inject, observer } from 'mobx-react'

// 构建一个父组件-高阶组件

@inject('store')
@observer
class App extends Component {

  state = {
    isShow: false
  }

  componentDidMount() {
    // autorun(() => {
    //   console.log(store.isTabbarShow)
    //   this.setState({
    //     isShow: store.isTabbarShow
    //   })
    // })
    // console.log(this.props.store.isTabbarShow)
  }

  render() {
    return (
      <div>
        {/* 其他的内容 */}
        <MRouter>
          {/* {this.state.isShow && <Tabbar></Tabbar>} */}
          {this.props.store.isTabbarShow && <Tabbar />}
        </MRouter>
      </div>
    )
  }
}

export default App

/**
 * /films => Films
 * /cinemas => Cinemas
 * /center => Center
 */
