import React, { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail(props) {
  console.log(props.match.params.filmId, '根据film id拿数据')
  // console.log(props.location.query.filmId, '根据film id拿数据')
  // console.log(props.location.state.filmId, '根据film id拿数据')

  useEffect(() => {
    store.isTabbarShow = false
    return () => {
      console.log('destroy')
      store.isTabbarShow = true
    }
  }, [])
  

  return (
    <div>Detail</div>
  )
}
