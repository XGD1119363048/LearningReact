import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import { connect } from 'react-redux'
// import store from '../redux/store'

function Detail(props) {
  // console.log(props.location.query.filmId, '根据film id拿数据')
  // console.log(props.location.state.filmId, '根据film id拿数据')

  let {show, hide, match} = props
  useEffect(() => {
    // console.log(props)
    // console.log('create')
    console.log(match.params.filmId, '根据film id拿数据')
    // store.dispath 通知
    // store.dispatch(hide())
    hide()

    return () => {
      console.log('destroy')
      // store.dispatch(show())
      show()
    }
  }, [match.params.filmId, show, hide])
  

  return (
    <div>Detail</div>
  )
}

// connect( 将来给孩子传的属性, 将来给孩子传的回调函数 )

const mapDispatchToProps = {
  show,
  hide
}
export default connect(null, mapDispatchToProps)(Detail)
