import React, { Component } from 'react'
import './css/02-卖座.css'
import Film from './mzcomponent/Film'
import Cinema from './mzcomponent/Cinema'
import Center from './mzcomponent/Center'
import Tabbar from './mzcomponent/Tabbar'
import Navbar from './mzcomponent/Navbar'

export default class App extends Component {

    state = {
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
                <Navbar />
                {
                    this.which()
                }
                <Tabbar myevent={(index) => {
                    console.log('父组件',index);
                    this.setState({
                        current: index
                    })
                }}/>
            </div>
        )
    }
}
