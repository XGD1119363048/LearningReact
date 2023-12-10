import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import store from '../redux/store'

export default function Detail(props) {
  // console.log(props.location.query.filmId, '根据film id拿数据')
  // console.log(props.location.state.filmId, '根据film id拿数据')
  console.log(props.match.params.filmId, '根据film id拿数据')

  useEffect(() => {
    // console.log('create')
    // store.dispath 通知
    store.dispatch(hide())

    return () => {
      console.log('destroy')
      store.dispatch(show())
    }
  }, [])
  

  return (
    <div>Detail</div>
  )
}
