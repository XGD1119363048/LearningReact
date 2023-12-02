import React from 'react'
import ReactDOM from 'react-dom'
import App from './06-react-redux/App'
import { Provider } from 'react-redux'
import store from './06-react-redux/redux/store'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById("root"))