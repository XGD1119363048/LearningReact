import React, { Component } from 'react'
import './css/02-卖座.css'
import Film from './mzcomponent2/Film'
import Cinema from './mzcomponent2/Cinema'
import Center from './mzcomponent2/Center'
import Tabbar from './mzcomponent2/Tabbar'
import Navbar from './mzcomponent2/Navbar'

export default class App extends Component {

    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            }
        ],
        current: 0
    }

    which() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <Navbar myevent={() => {
                    this.setState({
                        current: 2
                    })
                }} />
                {
                    this.which()
                }
                <Tabbar myevent={(index) => {
                    console.log('父组件',index);
                    this.setState({
                        current: index
                    })
                }} current={this.state.current} list={this.state.list} />
            </div>
        )
    }
}
