import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: 'hanfei'
    }

    componentWillMount() {
        console.log('will mount', document.getElementById('myname'));
        // 第一次渲染前的最后一次状态修改
        this.setState({
            myname: 'Hanfei'
        })
    }

    componentDidMount() {
        console.log('did mount',document.getElementById('myname'));
    }

    render() {
        console.log('render');
        return (
            <div>
                <span id='myname'>{this.state.myname}</span>
            </div>
        )
    }
}
