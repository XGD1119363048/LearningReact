import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('/test.json').then(res => {
            console.log(res.data);
            setList(res.data.data.films)
        })
    }, [])


    return (
        <div>
            <ul>
                {
                    list.map(item => {
                        return <li key={item.filmId}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
