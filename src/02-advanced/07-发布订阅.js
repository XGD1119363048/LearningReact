import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>App</div>
        )
    }
}

// 调度中心
var bus = {

    list: [],

    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },

    // 发布
    publish(text) {
        // 遍历所有的List,将回调函数执行
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

// 订阅者
/* 将两个回调函数往subscribe里注册 */
bus.subscribe((value) => {
    console.log("11111", value);
})

bus.subscribe((value) => {
    console.log("22222", value);
})

// 发布者
setTimeout(()=> {
    bus.publish("男人看了沉默")
}, 0)