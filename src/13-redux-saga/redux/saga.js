import { take, fork, call, put } from 'redux-saga/effects'

function *watchSaga() {
  while(true) {
    // take 监听组件发来的 action
    yield take('get-list')
    // fork 非阻塞调用的形式执行 fn
    yield fork(getList)
  }
}

function *getList() {
  // 异步处理

  // call 函数发异步请求
  let res = yield call(getListAction) // z阻塞的调用 fn

  yield put({
    type: 'change-list',
    payload: res
  })
  // put 函数发出新的 action，非阻塞式执行（立即执行）
}

function getListAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['111', '222', '333'])
    }, 2000)
  })
}

export default watchSaga