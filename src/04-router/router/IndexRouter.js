import React, { Component } from 'react'
// BrowserRouter
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
  return localStorage.getItem('token')
}

// import NowPlaying from '../views/NowPlaying'

// BrowserRouter，没有#路径，真正朝后端发请求要页面，后端没有对应的路径处理逻辑就会404

export default class IndexRouter extends Component {
  render() {
    return (
      <Router>
        {this.props.children}
        <Switch>
          <Route path="/films" component={Films} />
          {/* <Route path='/films/nowplaying' component={NowPlaying} /> */}
          <Route path="/cinemas" component={Cinemas} />

          {/* <Route path="/center" component={Center} /> */}
          <Route path='/center' render={(props) => {
            // console.log(props)
            return isAuth() ? <Center myname='xgd' /> : <Redirect to='/login' />
          }} />

          <Route path='/login' component={Login} />

          <Route path='/detail/:filmId' component={Detail} />
          {/* <Route path='/detail' component={Detail} /> */}
          {/* 模糊匹配 */}
          {/* <Redirect from='/' to='/films' /> */}
          {/* 精确匹配 exact */}
          <Redirect from='/' to='/films' exact />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

// class Route extends Component {
//   // ...

//   render() {
//     var MyComponent = this.props.component
//     return <div>
//       <MyComponent history={} match={} />
//     </div>
//   }
// }
