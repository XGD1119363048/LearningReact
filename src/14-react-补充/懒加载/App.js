import React, { Component, Suspense } from 'react'
// import NowPlaing from './components/NowPlaying'
// import CommingSoon from './components/CommingSoon'

const NowPlaing = React.lazy(() => import('./components/NowPlaying'))
const CommingSoon = React.lazy(() => import('./components/CommingSoon'))

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            type: 1
          })
        }}>正在热映</button>
        <button onClick={() => {
          this.setState({
            type: 2
          })
        }}>即将上映</button>

        <Suspense fallback={<div>正在加载中...</div>}>
          {
            this.state.type === 1 ? <NowPlaing /> : <CommingSoon />
          }
        </Suspense>
      </div>
    )
  }
}


