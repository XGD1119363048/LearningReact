// 1. 引入 redux
// 2. createStore( reducer )

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'

import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'persistxgd',
  storage,
  whitelist: ['CityReducer'], // 持久化白名单
  // blacklist: [] 持久化黑名单
}

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))
let persistor = persistStore(store)

export {store, persistor}

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

// export default store

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