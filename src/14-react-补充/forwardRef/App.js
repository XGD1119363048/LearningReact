import React, { useEffect, useRef } from 'react'

export default function App() {
  let mytext = null
  return (
    <div>
      <button onClick={() => {
        console.log(mytext)
        mytext.current.focus()
        mytext.current.value = ''
      }}>获取焦点</button>

      <Child callback={(el) => {
        // console.log(el)

        mytext = el
      }} />
    </div>
  )
}

function Child(props) {
  const mytext = useRef()
  const {callback} = props
  useEffect(() => {
    // console.log(mytext)
    callback(mytext)
  }, [callback])
  

  return <div style={{
    background: 'yellow'
  }}>
    <input defaultValue='11111' ref={mytext} />
  </div>
}
