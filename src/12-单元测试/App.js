import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: '',
    list: ['111', '222', '333']
  }
  render() {
    return (
      <div>
        <h1>xgd-todo</h1>
        <input value={this.state.text} onChange={(evt) => {
          this.setState({
            text: evt.target.value
          })
        }} />
        <button className='add' onClick={() => {
          this.setState({
            list: [...this.state.list, this.state.text]
          })
        }}>add</button>
        <ul>
          {
            this.state.list.map((item, index) => <li key={item + Math.random().toString().replace('.', '')}>
              {item}
              <button className='del' onClick={() => {
                var newList = [...this.state.list]
                newList.splice(index, 1)
                this.setState({
                  list: newList
                })
              }}>del</button>
            </li>)
          }
        </ul>
      </div>
    )
  }
}
