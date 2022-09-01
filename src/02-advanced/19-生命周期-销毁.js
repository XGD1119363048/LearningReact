import React, { Component } from 'react'

class Child extends Component {

    componentDidMount() {
        window.onresize = () => {
            console.log('resize')
        }
        this.timer = setInterval(() => {
            console.log('111');
        }, 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        window.onresize = null
        clearInterval(this.timer)
    }

    render() {
        return <div>
            Child
        </div>
    }
}

export default class App extends Component {

    state = {
        flag: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>click</button>
                {this.state.flag && <Child />}
            </div>
        )
    }
}
