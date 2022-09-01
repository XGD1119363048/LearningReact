import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>
            Child
            {this.props.children[1]}
            {this.props.children[2]}
            {this.props.children[0]}
        </div>
    }
}

class Swiper extends Component {
    render() {
        return (
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                </Swiper>
                <Child>
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                </Child>
            </div>
        )
    }
}
