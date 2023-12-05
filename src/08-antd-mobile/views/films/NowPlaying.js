import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { List, Image, InfiniteScroll } from 'antd-mobile'

export default function NowPlaying(props) {
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const count = useRef(0)

  const history = useHistory()

  const loadMore = () => {
    console.log('到底了')
    count.current++
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=4423619`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      setList([...list, ...res.data.data.films])
      setHasMore(res.data.data.films.length > 0)
    })
  }
  
  return (
    <div>
      <List>
        {list.map(item => (
          <List.Item
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                width={80}
                // height={40}
              />
            }
            description={<div>
              <div style={{
                visibility: item.grade ? 'visible' : 'hidden'
              }}>观众评分 {item.grade}</div>
              <div>主演：{item.actors.map(actor => actor.name).join(' ')}</div>
              <div>{item.nation} | {item.runtime}分钟</div>
            </div>}
            onClick={() => {
              history.push(`/detail/${item.filmId}`)
            }}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
