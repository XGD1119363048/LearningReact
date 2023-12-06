import { autorun } from 'mobx'
import React, { useEffect, useState } from 'react'
import store from '../mobx/store'

export default function Cinemas(props) {
  // const [cityName] = useState("")
  const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    if (store.list.length === 0) {
      store.getList()
    }
    let unsubscribe = autorun(() => {
      console.log(store.list, store.isTabbarShow)
      setCinemaList(store.list)
    })
    return () => {
      unsubscribe()
    }

  }, [])


  return (
    <div>
      {
        cinemaList.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
          <dt>{item.name}</dt>
          <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        </dl>)
      }
    </div>
  )
}
