// import React, { Component } from 'react'

// class Tabbarr extends Component {

//     handleClick(index) {
//         // 通知父组件修改父组件的状态
//         this.props.myevent(index);
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) =>
//                             <li
//                                 key={item.id}
//                                 className={this.props.current === index ? 'active' : ''}
//                                 onClick={() => this.handleClick(index)}
//                             >
//                                 {item.text}
//                             </li>
//                         )
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

const Tabbar = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((item, index) =>
                        <li
                            key={item.id}
                            className={props.current === index ? 'active' : ''}
                            onClick={() => props.myevent(index)}
                        >
                            {item.text}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Tabbar
