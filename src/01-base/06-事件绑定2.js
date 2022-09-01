import React, { Component } from 'react'

export default class App extends Component {

    a = 100

    render() {
        return (
        <div>
            <label htmlFor='name'>用户名：</label>
            <input id='name' />

            {/* 逻辑不多时推荐 */}
            <button onClick={ ()=> {
                // 不解耦
                // 逻辑过长，不清晰，可维护性不好
                console.log('click1','如果处理逻辑过多，不推荐',this.a)
            }}>add1</button>

            {/* 不太推荐，因为需要修正this指向 */}
            <button onClick={ this.handleClick2.bind(this) }>add2</button>
            {/* 比较推荐，没有this指向困扰 */}
            <button onClick={ this.handleClick3 }>add3</button>
            {/* 
                非常推荐，传餐好用
                可以绑定this
                逻辑清晰，比较推荐
            */}
            <button onClick={ () => this.handleClick4() }>add4</button>
        </div>
        )
    }

    handleClick2() {
        //   可以用bind绑定this
        console.log('click2',this.a);
    }

    handleClick3 = (evt) => {
        //   可以绑定this
        console.log('click3',this.a, evt.target);
    }

    handleClick4() {
        console.log('click4',this.a);
    }

}

var obj1 = {
    name: 'obj1',
    getName() {
        console.log(this.name);
    } 
}

var obj2 = {
    name: 'obj2',
    getName() {
        console.log(this.name);
    } 
}

obj1.getName.bind(obj2)()
obj2.getName()