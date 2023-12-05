import React, { Component } from 'react'

import { Map } from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'xgd',
      select: 'aa',
      filter: Map({
        text: '',
        up: true,
        down: false
      })
    })
  }

  componentDidMount() {
    console.log(this.state.info)
    console.log(this.state.info.get('filter'))
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            info: this.state.info.set('name', 'xiaoming').set('select', 'bb')
          })
        }}>click</button>
        {this.state.info.get('name')}
        <Child filter={this.state.info.get('filter')} />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return <div>
      Child
    </div>
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.filter === nextProps.filter) {
      return false
    }
    return true
  }
}
