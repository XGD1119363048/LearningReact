import React, { Component } from 'react'
import './css/01-index.css'

class App extends Component {
  render() {
    let myname = "hanfei";
    let obj = {
        background: "yellow"
    }
    return (
        <>
            <div style={obj}>{10+20}-{myname}</div>
            <div className='active'>我是div</div>
        </>
    )
  }
}

export default App;
