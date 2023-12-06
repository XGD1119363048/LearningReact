// import { autorun } from 'mobx'
import { Observer } from 'mobx-react'
import React, { useEffect } from 'react'
import store from '../mobx/store'


export default function Cinemas(props) {
  // const [cityName] = useState("")
  // const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    if (store.list.length === 0) {
      console.log('拿数据')
      store.getList()
    } else {
      console.log('缓存')
    }
    // let unsubscribe = autorun(() => {
    //   console.log(store.list, store.isTabbarShow)
    //   setCinemaList(store.list)
    // })
    return () => {
      // unsubscribe()
    }

  }, [])


  return (
    <div>
      <Observer>
      {
        // cinemaList.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
        //   <dt>{item.name}</dt>
        //   <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        // </dl>)
        () => {
          return store.list.map(item => <dl key={item.cinemaId} style={{padding: '10px'}}>
          <dt>{item.name}</dt>
          <dt style={{fontSize: '12px', color: 'grey'}}>{item.address}</dt>
        </dl>)
        }
      }
      </Observer>
    </div>
  )
}
