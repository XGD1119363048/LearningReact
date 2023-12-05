import React, { Component } from 'react'

/**
 * 1. npm i immutable
 * 2. import {Map} from 'immutable'
 */

import { Map } from 'immutable'

let obj = {
  name: 'xgd',
  age: 100
}
let oldImmuObj = Map(obj)
let newImmuObj = oldImmuObj.set('name', 'xiaoming')
// console.log(oldImmuObj, newImmuObj)

// 1. get 获取 Immutable
console.log(oldImmuObj.get('name'), newImmuObj.get('name'))

// 2 immutable => 普通对象
console.log(oldImmuObj.toJS(), newImmuObj.toJS())

// export default class App extends Component {
//   state = {
//     info: Map({
//       name: 'xgd',
//       age: 100
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           this.setState({
//             info: this.state.info.set('name', 'xiaoming').set('age', 18)
//           })
//         }}>click</button>
//         {this.state.info.get('name')}--
//         {this.state.info.get('age')}
//       </div>
//     )
//   }
// }

export default class App extends Component {
  state = {
    info: {
      name: 'xgd',
      age: 100
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          let old = Map(this.state.info)
          let newImmu = old.set('name', 'xiaoming').set('age', 18)
          this.setState({
            info: newImmu.toJS()
          })
        }}>click</button>
        {this.state.info.name}--
        {this.state.info.age}
      </div>
    )
  }
}
