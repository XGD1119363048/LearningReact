import React, { forwardRef, useRef } from 'react'

export default function App() {
  const mytext = useRef()
  return (
    <div>
      <button onClick={() => {
        console.log(mytext)
        mytext.current.value = ''
        mytext.current.focus()
      }}>获取焦点</button>

      <Child ref={mytext} />
    </div>
  )
}

const Child = forwardRef((props, ref) => {
  return <div style={{
    background: 'yellow'
  }}>
    <input defaultValue='22222' ref={ref} />
  </div>
})
