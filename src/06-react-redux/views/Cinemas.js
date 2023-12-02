import React, { useEffect } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { connect } from 'react-redux'

function Cinemas(props) {
  let {cinemaList, getCinemaListAction} = props
  useEffect(() => {
    // console.log(store.getState().CinemaListReducer.list)
    if (cinemaList.length === 0) {
      // 去后台取数据
      console.log('去后台取数据')
      // actionCreator 里面写异步
      // store.dispatch(getCinemaListAction())
      getCinemaListAction()
    }

  }, [cinemaList, getCinemaListAction])


  return (
    <div>
      <div style={{overflow: 'hidden'}}>
        <div onClick={() => {
          props.history.push('/city')
        }} style={{float: 'left'}}>
          {props.cityName}
          {/* {store.getState().CityReducer.cityName} */}
        </div>
        <div style={{float: 'right'}} onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</div>
      </div>
      {
        props.cinemaList.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
          <dt>{item.name}</dt>
          <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        </dl>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cinemaList: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispatchToProps = {
  getCinemaListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
