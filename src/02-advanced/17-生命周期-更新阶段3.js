import React, { Component } from 'react'

class Child extends Component {

    state = {
        title: ''
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // 最先获取父组件传来的属性，可以利用属性进行ajax或者逻辑处理
        console.log('componentWillReceiveProps', this.props.text);
        this.setState({
            title: nextProps.text + 'hanfei'
        })
    }

    render() {
        return <div>
            {
                this.props.text
            } - 
            child - 
            {
                this.state.title
            }
        </div>
    }
}

export default class App extends Component {

    state= {
        text: '111111'
    }

    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={() => {
                    this.setState({
                        text: '222222'
                    })
                }}>click</button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}
