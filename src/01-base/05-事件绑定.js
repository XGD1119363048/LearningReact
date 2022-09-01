import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <label htmlFor='name'>用户名：</label>
          <input id='name' />

          <button onClick={ ()=> {
            // 不解耦
            // 逻辑过长，不清晰，可维护性不好
              console.log('click1','如果处理逻辑过多，不推荐')
          }}>add1</button>

          <button onClick={ this.handleClick2 }>add2</button>
          <button onClick={ this.handleClick3 }>add3</button>
          <button onClick={ () => {
            // 可以绑定this
            // 逻辑清晰，比较推荐
              this.handleClick4();
          } }>add4</button>
      </div>
    )
  }

  handleClick2() {
    //   可以用bind绑定this
      console.log('click2');
  }

  handleClick3 = () => {
    //   可以绑定this
      console.log('click3');
  }

  handleClick4 = () => {
    console.log('click4');
  }
}
