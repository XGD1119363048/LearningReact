import React, { Component } from 'react'

export default class App extends Component {

    // state = {
    //     mytext: "收藏",
    //     myShow: true
    // }

    constructor() {
        super()
        this.state = {
            mytext: "收藏",
            myShow: true,
            myname: "hanfei"
        }
    }

    render() {
        return (
        <div>
            <h1>欢迎来到React开发 - {this.state.myname}</h1>
            <button onClick={ () => {
                this.setState({
                    myShow: !this.state.myShow,
                    myname: "xiaoming"
                })
            }}>{ this.state.myShow ? "收藏" : "取消收藏" }</button>
        </div>
        )
    }
}
