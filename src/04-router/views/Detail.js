import React from 'react'

export default function Detail(props) {
  console.log(props.match.params.filmId, '根据film id拿数据')
  // console.log(props.location.query.filmId, '根据film id拿数据')
  // console.log(props.location.state.filmId, '根据film id拿数据')
  return (
    <div>Detail</div>
  )
}
