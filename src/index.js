import React from 'react'
import ReactDOM from 'react-dom'
import App from './14-react-补充/懒加载/App'

// import { Provider } from 'mobx-react'
// import store from './10-mobx/04-router/mobx/store'

ReactDOM.render(
  // <React.StrictMode>
  // <Provider store={store}>
    <App />
  // </Provider>
  // </React.StrictMode>
  ,
  document.getElementById("root"))