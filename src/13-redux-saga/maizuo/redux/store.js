// 1. 引入 redux
// 2. createStore( reducer )

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'

import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import createSagaMiddleware from 'redux-saga'
import watchSaga from './saga'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise, sagaMiddleware)))

sagaMiddleware.run(watchSaga)

/**
 * store.dispatch
 * store.subscribe
 * store.getState
 */

// function createXGDStore(reducer) {
//   let list = []
//   let state = reducer()
//   function subscribe(callback) {
//     list.push(callback)
//   }

//   function dispatch(action) {
//     state = reducer(state, action)
//     for(let i in list) {
//       list[i] && list[i]()
//     }
//   }

//   function getState() {
//     return state
//   }
//   return {
//     subscribe,
//     dispatch,
//     getState
//   }
// }

export default store

/**
 * var obj - {
 *  myname: 'xgd'
 * }
 * function test(obj) {
 *  var newobj = {...obj}
 *  newobj.myname = 'xiaoming'
 *  return newobj
 * }
 * test(obj)
 * test(obj)
 * test(obj)
 * test(obj)
 * 
 * 
 * 纯函数
 * 1. 对外界没有副作用
 * 2. 同样的输入得到同样的输出
 */