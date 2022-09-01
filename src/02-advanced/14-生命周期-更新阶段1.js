import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        myname: 'hanfei',
        list: []
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate', document.getElementById("myname").innerHTML);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate',document.getElementById("myname").innerHTML);
    }

    componentDidMount(prevProps, prevState) {
        axios.get('/test.json').then(res => {
            this.setState({
                list: res.data.data.films
            })

            // 避免didUpdate多次调用核心代码
            if (prevState.list.length == 0) {
                new BetterScroll('#wrapper')
            }
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "tiechui"
                    })
                }}>click</button>
                <span id='myname'>{this.state.myname}</span>
                <div id='wrapper' style={{
                    height: '100px',
                    background: 'yellow',
                    overflow: 'hidden'
                }}>
                    <ul>
                        {
                            this.state.list.map(item => 
                                <li key={item.filmId}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
