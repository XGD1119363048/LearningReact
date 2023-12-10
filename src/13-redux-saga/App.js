import React from 'react'
import store from './redux/store'
// import './02-可执行生成器'
export default function App() {
  return (
    <div>
      <button onClick={() => {
        if (store.getState().list1.length === 0) {
          // dispatch
          store.dispatch({
            type: 'get-list'
          })
        } else {
          console.log('缓存', store.getState().list1)
        }
      }}>click-ajax-异步缓存</button>
    </div>
  )
}
