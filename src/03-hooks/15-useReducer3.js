import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import './css/index.css'

const GlobalContext = React.createContext() // 创建context对象

const initialState = {
  filmList: [],
  info: ''
}

const reducer = (prevState, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case 'change-filmList':
      newState.filmList = action.value
      return newState
    case 'change-info':
      newState.info = action.value
      return newState
    default:
      return prevState
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`/test.json`).then(res => {
      console.log(res.data.data.films);
      dispatch({
        type: 'change-filmList',
        value: res.data.data.films
      })
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      state, dispatch
    }}>
      <div>
        {
          state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)
        }
        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  )

}

function FilmItem(props) {
  let { name, poster, grade, synopsis } = props;

  const {dispatch} = useContext(GlobalContext)

  return <div className='filmitem' onClick={() => {
    // console.log(synopsis);
    // value.changeInfo(synopsis)
    dispatch({
      type: 'change-info',
      value: synopsis
    })
  }}>
    <img src={poster} alt={name} />
    <h4>{name}</h4>
    <div>观众评分： {grade}</div>
  </div>
}

function FilmDetail() {
  const {state} = useContext(GlobalContext)
  return <div className='filmdetail'>
    {state.info}
  </div>
}
