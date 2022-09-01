import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination]);

export default class App extends Component {
    
    // 此写法完全没有复用性

    state = {
        list: []
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                list: ['aaa', 'bbb', 'ccc']
            })
        }, 1000)


    }

    componentDidUpdate(prevProps, prevState) {
        new Swiper('.swiper', {
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper" style={{ height: '200px', background: 'yellow' }}>
                        {
                            this.state.list.map(item =>
                                <div className="swiper-slide" key={item}>{item}</div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
