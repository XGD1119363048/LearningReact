import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef();
    render() {
        return (
        <div>
            {/* <input ref="mytext"/> */}
            <input ref={this.myref}/>
            <button onClick={ () => {
                // console.log('click1',this.refs.mytext.value)
                console.log('click',this.myref.current.value);
            }}>add1</button>
            <button onClick={ this.handleClick2.bind(this) }>add2</button>
            <button onClick={ this.handleClick3 }>add3</button>
        </div>
        )
    }

    handleClick2() {
        // 此时this指向的是undefinded
        console.log('click',this.myref.current.value);
    }

    handleClick3 = () => {
        console.log('click',this.myref.current.value);
    }
}
