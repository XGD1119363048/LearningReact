import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>
            <button onClick={() => {
                this.props.text = '333333'
            }}>
                click-子
            </button>
            Child-{this.props.text}
        </div>
    }
}

export default class App extends Component {

    state = {
        text: "111111"
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({
                    text: '222222'
                })}>
                    click-父
                </button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}
