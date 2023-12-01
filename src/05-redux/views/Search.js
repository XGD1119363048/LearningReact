import React, { useEffect, useMemo, useState } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'

export default function Search() {
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  const [mytext, setMytext] = useState('')

  useEffect(() => {
    // console.log(store.getState().CinemaListReducer.list)
    if (store.getState().CinemaListReducer.list.length === 0) {
      // 去后台取数据
      console.log('去后台取数据')
      // actionCreator 里面写异步
      store.dispatch(getCinemaListAction())
    } else {
      console.log('store 缓存')
    }
    var unsubscribe = store.subscribe(() => {
      console.log('Search 中订阅', store.getState().CinemaListReducer.list)
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消订阅
      unsubscribe()
    }

  }, [])

  const getCinemaList = useMemo(() => cinemaList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase())), [cinemaList, mytext])

  return (
    <div>
      <input value={mytext} onChange={(evt) => {
        setMytext(evt.target.value)
      }} />
      {
        getCinemaList.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
          <dt>{item.name}</dt>
          <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        </dl>)
      }
    </div>
  )
}
