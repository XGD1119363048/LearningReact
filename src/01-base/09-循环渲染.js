import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: ["aa", "bb", "cc"]
    }

    render() {

        // let newList2 = this.state.list.map(item => <li>{item}</li>)

        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index) => <li key={index}>{item}--{index}</li>)
                    }
                </ul>
            </div>
        )
    }
}

// 原生js - map
let list = ["aa", "bb", "cc"]
let newList = list.map(item => `<li>${item}</li>`)
console.log(newList.join(""));
