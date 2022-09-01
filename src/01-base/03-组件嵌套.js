import React, { Component } from 'react'

class Child extends Component {
    render() {
        return <div>Child</div>
    }
}

class Navigator extends Component {
    render() {
        return <div>
            Navigator
            <Child></Child>
        </div>
    }
}

function Swipperbar() {
    return <div>Swipperbar</div>
}

const Tabbar = () => <div>Tabber</div>

class App extends Component {
  render() {
    return (
        <div>
            <Navigator></Navigator>
            <Swipperbar></Swipperbar>
            <Tabbar></Tabbar>
        </div>
    )
  }
}

export default App;