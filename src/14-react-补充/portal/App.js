import React, { Component } from 'react'
import './App.css'
// import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'

export default class App extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div className='box' onClick={() => {
        console.log('box身上监听的事件')
      }}>
        <div className='left'></div>
        <div className='right'>
          <button onClick={() => {
            this.setState({
              isShow: true
            })
          }}>ajax</button>
          {
            this.state.isShow && <PortalDialog onClose={() => {
              // console.log('1111')
              this.setState({
                isShow: false
              })
            }}>
              <div>1111</div>
              <div>2222</div>
              <div>3333</div>
            </PortalDialog>
          }
        </div>
      </div>
    )
  }
}
