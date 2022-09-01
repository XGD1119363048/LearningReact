import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor() {
        super()

        this.state = {
            cinemaList: [],
            bacCinemaList: []
        }

        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6455013",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data);
            this.setState({
                cinemaList: res.data.data.cinemas,
                bacCinemaList: res.data.data.cinemas
            })
        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return (
        <div>
            <input onInput={this.handleInput} />
            {
                this.state.cinemaList.map(item=>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>    
                )
            }
        </div>
        )
    }

    handleInput = (event) => {
        // console.log('input', event.target.value);
        // 每次都基于最原始的数据进行过滤
        let newList = this.state.bacCinemaList.filter(item => 
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(newList);
        
        this.setState({
            cinemaList: newList
        })

    }
}

// filter
// var arr = ["aaa", "abc", "bcc"]

// var newArr = arr.filter(item => item.includes("b"))
// console.log(newArr);