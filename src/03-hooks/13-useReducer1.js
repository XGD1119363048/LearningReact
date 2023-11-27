import React, { useReducer } from 'react'

// 处理函数
const reducer = (preState, action) => {
  console.log('reducer', preState, action)
  let newState = {...preState}
  switch (action.type) {
    case 'xgd-minus':
      newState.count--
      return newState
    case 'xgd-add':
      newState.count++
      return newState
    default:
      return preState
  }
}

// 外部的状态
const initialState = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'xgd-minus'
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: 'xgd-add'
        })
      }}>+</button>
    </div>
  )
}
