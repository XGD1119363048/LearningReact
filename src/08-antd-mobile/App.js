import React, { Component } from 'react'
import MRouter from './router/IndexRouter'

import XGDTabbar from './components/Tabbar'

import './views/css/App.css'
import { connect } from 'react-redux'

// import store from './redux/store'
// import { Button } from 'antd-mobile'

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  
  render() {
    return (
      <div>
        {/* 其他的内容 */}
        {/* <Button color='danger'>click</Button> */}
        <MRouter>
          {this.props.isShow && <XGDTabbar/>}
        </MRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    a: 1,
    b: 1,
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)

/**
 * /films => Films
 * /cinemas => Cinemas
 * /center => Center
 */
