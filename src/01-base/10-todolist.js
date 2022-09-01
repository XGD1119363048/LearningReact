import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

    myref = React.createRef();

    state = {
        list: [{
            id:1,
            text:"111"
        },{
            id:2,
            text:"222"
        },{
            id:3,
            text:"333"
        }]
    }

    render() {
        return (
            <div>
                <label>用户名：</label>
                <input ref={this.myref} />
                <button onClick={this.handleClickAdd}>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) => 
                            <li key={item.id}>
                                {/* {item.text}  */}
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.text
                                    }
                                }></span>
                                {/* 但是这样会有性能问题 */}
                                <button onClick={() => this.handleClickCls(index)}>cls</button>
                            </li>
                        )
                    }
                </ul>
                {/* { this.state.list.length === 0 ? <div>暂无代办事项</div> : null} */}
                {/* { this.state.list.length === 0 && <div>暂无代办事项</div> } */}
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无代办事项</div>
            </div>
        )
    }

    handleClickAdd = () => {
        // 非常不提倡 不要直接修改状态 性能优化的时候可能会出现问题
        // this.state.list.push(this.myref.current.value)

        // js引用赋值，两者指向同一个地方，相当于一个房间多个钥匙
        let newList = [...this.state.list]
        newList.push({
            id: Math.random()*100000000,
            text: this.myref.current.value
        })

        this.setState({
            list: newList
        })

        // 清空输入框
        this.myref.current.value = ""
    }

    // 写成箭头函数之后不出来，可能是写法有问题？
    handleClickCls(index) {

        let newList = this.state.list.slice();
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
