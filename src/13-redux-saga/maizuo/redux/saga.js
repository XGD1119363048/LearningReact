import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

function *watchSaga() {
  yield takeEvery('get-cinemalist', getCinemaList)
}

function *getCinemaList() {
  // 异步处理

  // call 函数发异步请求
  let res = yield call(getListAction1) // 阻塞的调用 fn

  yield put({
    type: 'change-cinemalist',
    payload: res
  })
  // put 函数发出新的 action，非阻塞式执行（立即执行）
}

function getListAction1() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1524161',
    method: 'get',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    // console.log(res.data.data.cinemas)
    return res.data.data.cinemas
  })
}

export default watchSaga