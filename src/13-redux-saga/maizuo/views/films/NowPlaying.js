import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

export default function NowPlaying(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3096986',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])

  const history = useHistory()
  console.log(history)

  // const handleChangePage = (id) => {
    // window.location.href = `#/detail/${id}`
    // console.log(props)
    // props.history.push(`/detail/${id}`)

    // 1-动态路由传参
    // history.push(`/detail/${id}`)

    // 2-query传参(detail页面刷新页面会拿不到id，因为需要保证从上个页面跳转过来才能拿到id)
    // history.push({
    //   pathname: '/detail',
    //   query: {
    //     filmId: id,
    //   }
    // })

    // 3-state传参(detail页面刷新页面会拿不到id，因为需要保证从上个页面跳转过来才能拿到id)
    // history.push({
    //   pathname: '/detail',
    //   state: {
    //     filmId: id
    //   }
    // })
  // }

  // const handleChangePage = useCallback(
  //   (id) => {
  //     history.push(`/detail/${id}`)
  //   },
  //   [history]
  // )
  
  
  
  return (
    <div>
      {
        list.map(item => <WithFilmItem key={item.filmId} {...item} />)
      }
    </div>
  )
}

function FilmItem(props) {
  // console.log(props)
  let {filmId, name} = props
  return <li onClick={() => {
    // handleChangePage(filmId)
    props.history.push(`/detail/${filmId}`)
  }}>
    {/* <NavLink to={`/detail/${item.filmId}`}>{item.name}</NavLink> */}
    {/* <img src={poster} alt={name} /> */}
    {name}
  </li>
}

const WithFilmItem = withRouter(FilmItem)
