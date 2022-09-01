import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communination.css'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ''
        }
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films);
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} onEvent={(value) => {
                        console.log(value)
                        this.setState({
                            info: value
                        })
                    }} />)
                }
                <FilmDetail info={this.state.info} />
            </div>
        )
    }
}

class FilmItem extends Component {1
    render() {
        let {name, poster, grade, synopsis} = this.props;
        return <div className='filmitem' onClick={() => {
            this.props.onEvent(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{this.props.name}</h4>
            <div>观众评分： {grade}</div>
        </div>
    }
}

class FilmDetail extends Component {
    render() {
        return <div className='filmdetail'>
            {
                this.props.info
            }
        </div>
    }
}