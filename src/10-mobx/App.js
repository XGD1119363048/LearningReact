import React, { Component } from 'react'
import { observable, autorun } from 'mobx'

// // 对于普通类型数据的监听
// let observableNumber = observable.box(10)
// let observableName = observable.box('xgd')

// autorun(() => {
//     console.log('number 改变了', observableNumber.get())
// })
// // 第一次执行，之后每次改变也会执行
// autorun(() => {
//     console.log('name 改变了', observableName.get())
// })

// setTimeout(() => {
//     observableNumber.set(20)
//     // observableName.set('xiaoming')
// }, 1000)

// setTimeout(() => {
//     // observableNumber.set(20)
//     observableName.set('xiaoming')
// }, 1000)

let myobj = observable({
    name: 'xgd',
    age: 100
})

autorun(() => {
    console.log('对象的name树形改变了', myobj.name)
})
setTimeout(() => {
    myobj.name = 'xiaoming'
}, 1000)

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
