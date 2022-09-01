import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

    state = {
        mytext: '',
        list: [{
            id:1,
            mytext:"111",
            isChecked: false
        },{
            id:2,
            mytext:"222",
            isChecked: false
        },{
            id:3,
            mytext:"333",
            isChecked: false
        }]
    }

    render() {
        return (
            <div>
                <label>用户名：</label>
                <input value={this.state.mytext} onChange={(evt) => {
                    this.setState({
                        mytext: evt.target.value
                    })
                }} />
                <button onClick={this.handleClickAdd}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) => 
                            <li key={item.id}>
                                <input type="checkbox" checked={item.isChecked} onChange={
                                    ()=>this.handleChecked(index)
                                }/>
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.mytext
                                    }
                                } style={{textDecoration: item.isChecked?"line-through": ""}}></span>
                                <button onClick={() => this.handleClickCls(index)}>cls</button>
                            </li>
                        )
                    }
                </ul>
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无代办事项</div>
            </div>
        )
    }

    handleClickAdd = () => {
       
        let newList = [...this.state.list]
        newList.push({
            id: Math.random()*100000000,
            mytext: this.state.mytext,
            isChecked: false
        })

        this.setState({
            list: newList,
            mytext: ""
        })
    }

    handleClickCls(index) {

        let newList = this.state.list.slice();
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    handleChecked = (index) => {
        console.log(index);
        let newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked

        this.setState({
            list: newList
        })
    }
}
