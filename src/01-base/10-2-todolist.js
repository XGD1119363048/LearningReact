import React, { Component } from 'react'

export default class App extends Component {

    // constructor(){
    //     super()
    //     this.myref = React.createRef();
    //     this.state = {
    //         list: [{
    //             id:1,
    //             text:"111"
    //         },{
    //             id:2,
    //             text:"222"
    //         },{
    //             id:3,
    //             text:"333"
    //         }]
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <label>用户名：</label>
    //             <input ref={this.myref} />
    //             <ul>
    //                 {
    //                     this.state.list.map((item, index) => 
    //                         <li key={item.id}>
    //                             {item.text} 
    //                             <button onClick={this.handleClickCls(index)}>cls</button>
    //                         </li>
    //                     )
    //                 }
    //             </ul>
    //         </div>
    //     )
    // }

    // handleClickCls = index => {
    //     let newList = this.state.list.slice();
    //     newList.splice(index, 1)
    //     this.setState({
    //         list: newList
    //     })
    // }

    constructor(){
        super()
        this.state = {
            content:true
        }
    }
    
    change=obj=>{
        this.setState({
            content:!this.state.content
        })
        console.log(obj)
    }

    render(){
        return (
            <div>
                <h1>{this.state.content ? '1':'2'}</h1>
                <h2>{this.props.name}</h2>
                <button onClick={this.change.bind(this,this.state.content)}>
                    点击
                </button>
            </div>
        )
    }
}
