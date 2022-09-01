import React, { Component } from 'react'
import axios from 'axios'

class FilmList extends Component {

    state = {
        list: []
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4755259',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9124453',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    render() {
        return <div>
            <ul>
                {
                    this.state.list.map(item => 
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    }
}

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映</li>
                </ul>

                <FilmList type={this.state.type} />
            </div>
        )
    }
}
