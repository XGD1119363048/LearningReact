import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: 'hanfei',
        myage: 100
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps')
        return {
            myname: nextState.myname.substring(0, 1).toUpperCase()
            + nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: 'xiaoming'
                    })
                }}>click</button>
                app - {this.state.myname} - {this.state.myage}
            </div>
        )
    }
}
