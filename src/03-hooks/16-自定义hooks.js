import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

function useCinemaList() {
  const [cinemaList, setcinemaList] = useState([])

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6455013",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16546772631032973994426369","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setcinemaList(res.data.data.cinemas)
    })
  }, [])

  return {
    cinemaList
  }
}

function useFilter(cinemaList, mytext) {
  const getCinemaList = useMemo(() => cinemaList.filter(item =>
    item.name.toUpperCase().includes(mytext.toUpperCase()) ||
    item.address.toUpperCase().includes(mytext.toUpperCase())), [cinemaList, mytext])
  return {
    getCinemaList
  }
}

export default function Cinema() {
  const {cinemaList} = useCinemaList()
  
  const [mytext, setmytext] = useState('')

  const {getCinemaList} = useFilter(cinemaList, mytext)

  return (
    <div>
      <input value={mytext} onChange={(evt) => {
        setmytext(evt.target.value)
      }} />
      {
        getCinemaList.map(item =>
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}