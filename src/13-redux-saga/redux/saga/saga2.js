import { call, put, takeEvery } from 'redux-saga/effects'

function *watchSaga2() {
  // while(true) {
  //   // take 监听组件发来的 action
  //   yield take('get-list2')
  //   // fork 非阻塞调用的形式执行 fn
  //   yield fork(getList2)
  // }

  yield takeEvery('get-list2', getList2)
}

function *getList2() {
  // 异步处理

  // call 函数发异步请求
  let res1 = yield call(getListAction2_1) // 阻塞的调用 fn
  let res2 = yield call(getListAction2_2, res1) // 阻塞的调用 fn

  yield put({
    type: 'change-list2',
    payload: res2
  })
  // put 函数发出新的 action，非阻塞式执行（立即执行）
}

function getListAction2_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['444', '555', '666'])
    }, 2000)
  })
}

function getListAction2_2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, '777', '888', '999'])
    }, 2000)
  })
}

export default watchSaga2
export { getList2 }