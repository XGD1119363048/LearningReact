import React, { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props)
  }, [props])
  
  return (
    <div>404 Not Found</div>
  )
}

function xgdConnect(cb, obj) {
  let value = cb()
  return (MyComponent) => {
    return (props) => {
      console.log(props)
      return <div style={{color: 'red'}}>
        <MyComponent {...value} {...props} {...obj} />
      </div>
    }
  }
}

export default xgdConnect(() => {
  return {
    a: 1,
    b: 2
  }
}, {
  aa() {},
  bb() {}
})(NotFound)
