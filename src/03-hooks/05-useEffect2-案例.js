import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilmList(props) {

    const [list, setList] = useState([])

    useEffect(()=> {
        if (props.type === 1) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4755259',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setList(res.data.data.films)
            })
        } else {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9124453',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setList(res.data.data.films)
            })
        }
    },[props.type])

    return <div>
        <ul>
            {
                list.map(item => 
                    <li key={item.filmId}>{item.name}</li>
                )
            }
        </ul>
    </div>
}

export default function App() {

    const [type, setType] = useState(1)
    

    return (
        <div>
            <ul>
                <li onClick={() => {
                    setType(1)
                }}>正在热映</li>
                <li onClick={() => {
                    setType(2)
                }}>即将上映</li>
            </ul>

            <FilmList type={type} />
        </div>
    )
}
