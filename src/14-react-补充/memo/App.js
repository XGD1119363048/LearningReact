import React, { Component, memo } from 'react'

export default class App extends Component {
  state = {
    name: 'xgd',
    title: 'aaaaa'
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => {
          this.setState({
            name: 'xiaoming'
          })
        }}>click</button>
        <button onClick={() => {
          this.setState({
            title: 'bbbbb'
          })
        }}>click222</button>

        <Child title={this.state.title} />
      </div>
    )
  }
}

const Child = memo((props) => {
  console.log('11111')
  return <div>
    Child-{props.title}
  </div>
})