import React, { Component } from 'react'

export default class App extends Component {

    state = {
        count: 0
    }

    render() {
        return (
            <div>
                { this.state.count }
                <button onClick={this.handleClickAdd1}>add1</button>
                <button onClick={this.handleClickAdd2}>add2</button>
            </div>
        )
    }

    handleClickAdd1 = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }

    handleClickAdd2 = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count);
    
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count);
    
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count);
        }, 0);
    }
}
