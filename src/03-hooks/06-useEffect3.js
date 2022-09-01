import React, { Component, useEffect } from 'react'

function Child() {

    useEffect(()=>{
        window.onresize = () => {
            console.log('resize')
        }
        var timer = setInterval(() => {
            console.log('111');
        }, 1000)


        return () => {
            console.log('组件销毁');
            window.onresize = null
            clearInterval(timer)
        }

    },[])

    return <div>
            Child
        </div>
}


export default class App extends Component {

    state = {
        flag: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        flag: !this.state.flag
                    })
                }}>click</button>
                {this.state.flag && <Child />}
            </div>
        )
    }
}
