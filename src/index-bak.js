import React from 'react'
import ReactDOM from 'react-dom'
import App from './08-antd-mobile/App'
import { Provider } from 'react-redux'
import { store, persistor } from './08-antd-mobile/redux/store'

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
  // <App />
  ,
  document.getElementById("root"))