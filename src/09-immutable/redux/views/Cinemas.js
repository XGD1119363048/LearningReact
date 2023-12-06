import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

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
      console.log('Cinemas 中订阅', store.getState().CinemaListReducer.list)
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消订阅
      unsubscribe()
    }

  }, [])


  return (
    <div>
      <div style={{overflow: 'hidden'}}>
        <div onClick={() => {
          props.history.push('/city')
        }} style={{float: 'left'}}>
          {cityName}
          {/* {store.getState().CityReducer.cityName} */}
        </div>
        <div style={{float: 'right'}} onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div>
      {
        cinemaList.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
          <dt>{item.name}</dt>
          <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        </dl>)
      }
    </div>
  )
}
