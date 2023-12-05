import React, { Component } from 'react'

// 引用复制（浅拷贝）
let obj = {
  name: 'xgd'
}
let obj2 = obj
obj2.name = 'xiaoming'
console.log(obj, obj2)

// 比浅拷贝多复制了一层
let myobj = {
  name: 'xgd',
  arr: [1, 2, 3]
}
let myobj2 = {
  ...myobj
}
myobj2.name = 'xiaoming'
myobj2.arr.splice(1, 1)
console.log(myobj, myobj2)

// json-parse json-stringify 深拷贝，但不能有 undefined
let jsonobj = {
  name: 'xgd',
  arr: [1, 2, 3],
  address: undefined
}
let jsonobj2 = JSON.parse(JSON.stringify(jsonobj))
jsonobj2.name = 'xiaoming'
jsonobj2.arr.splice(1, 1)
console.log(jsonobj, jsonobj2)

// deepcopy 递归深拷贝，一层层复制，但性能不好，占用内存

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
