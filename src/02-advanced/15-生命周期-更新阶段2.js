import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: 'hanfei'
    }

    UNSAFE_componentWillUpdate() {
        console.log('willUpdate');
    }

    componentDidUpdate() {
        console.log('didUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if (this.state.myname !== nextState.myname) {
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true
        }

        return false
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: 'tiechui'
                    })
                }}>click</button>
                {this.state.myname}
            </div>
        )
    }
}
