// 1. 引入 redux
// 2. createStore( reducer )

import { createStore } from 'redux'

const reducer = (prevState = {
  show: true
}, action = {}) => {
  console.log(action)
  let newState = {...prevState}
  switch(action.type) {
    case 'hide-tabbar':
      newState.show = false
      return newState
    case 'show-tabbar':
      newState.show = true
      return newState
    default:
      return prevState
  }
}

const store = createStore(reducer)

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