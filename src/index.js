import React from 'react'
import ReactDOM from 'react-dom'
import App from './07-antd/05-步骤条'
// import { Provider } from 'react-redux'
// import { store, persistor } from './06-react-redux/redux/store'

// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  // <React.StrictMode>
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>
  // </React.StrictMode>
  <App />
  ,
  document.getElementById("root"))