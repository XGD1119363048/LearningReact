import React, { useContext, useReducer } from 'react'

const initialState = {
  a: '111',
  b: '111'
}

const reducer = (preState, action) => {
  let newState = {...preState}
  switch(action.type) {
    case 'change-a':
      newState.a = action.value
      return newState
    case 'change-b':
      newState.b = action.value
      return newState
    default:
      return preState
  }
}

const GlobalContext = React.createContext()

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={
      {
        state, dispatch
      }
    }>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const {dispatch} = useContext(GlobalContext)
  return <div style={{background: 'red'}}>
    <button onClick={() => {
      dispatch({
        type: 'change-a',
        value: '2222222'
      })
    }}>改变a</button>
    <button onClick={() => {
      dispatch({
        type: 'change-b',
        value: '3333333'
      })
    }}>改变b</button>
  </div>
}

function Child2() {
  const {state} = useContext(GlobalContext)
  return <div style={{background: 'yellow'}}>
    child2-{state.a}
  </div>
}

function Child3() {
  const {state} = useContext(GlobalContext)
  return <div style={{background: 'grey'}}>
    child3-{state.b}
  </div>
}
