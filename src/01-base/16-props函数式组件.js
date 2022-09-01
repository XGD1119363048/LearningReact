import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar title="导航"></Navbar>

                <Sidebar bg="yellow" position="left"></Sidebar>
            </div>
        )
    }
}
