// 1. 引入 redux
// 2. createStore( reducer )

import { applyMiddleware, combineReducers, createStore } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'

import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

// const reducer = (prevState = {
//   show: true,
//   cityName: '北京'
// }, action = {}) => {
//   console.log(action)
//   let newState = {...prevState}
//   switch(action.type) {
//     case 'hide-tabbar':
//       newState.show = false
//       return newState
//     case 'show-tabbar':
//       newState.show = true
//       return newState
//     case 'change-city':
//       newState.cityName = action.value
//       return newState
//     default:
//       return prevState
//   }
// }

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))

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