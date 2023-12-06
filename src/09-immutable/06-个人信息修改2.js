import React, { Component } from 'react'

import { fromJS } from 'immutable'

export default class App extends Component {
  state = {
    info: fromJS({
      name: 'xgd',
      location: {
        province: '上海',
        city: '浦东'
      },
      favor: ['读书', '看报', '写代码']
    })
  }

  componentDidMount() {
    console.log(this.state.info)
  }

  render() {
    return (
      <div>
        <h1>个人信息修改</h1>
        <button onClick={() => {
          this.setState({
            info: this.state.info.setIn(['name'], 'xiaoming').setIn(['location', 'city'], '宝山')
          })
        }}>修改</button>
        <div>
          {this.state.info.get('name')}
          <br/>
          {this.state.info.get('location').get('province')}
          -
          {this.state.info.get('location').get('city')}
          <br/>
          {
            this.state.info.get('favor').map((item, index) => <li key={item}>
              {item}
              <button onClick={() => {
                console.log(index)
                // this.setState({
                //   info: this.state.info.setIn(['favor', index], '111')
                // })
                this.setState({
                  info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
                })
              }}>del</button>
            </li>)
          }
        </div>
      </div>
    )
  }
}
