import React, { Component } from 'react'
import Navbar  from './Navbar'
export default class App extends Component {

   

    render() {

        let  obj = {
            title: "测试",
            leftShow: false,
            rightShow: false
        }

        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftShow={false} rightShow={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" rightShow={true} />
                    {/* <Navbar title="列表" leftShow={true} rightShow={true} /> */}
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" leftShow={true} rightShow={true} />
                </div>
                <div>
                    <h2>测试</h2>
                    <Navbar {...obj} />
                </div>
            </div>
        )
    }
}

class Test {
    a = 1
    static a = 100
}
console.log(Test.a);
console.log(new Test().a);