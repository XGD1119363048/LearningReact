import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {

    static defaultProps = {
        leftShow: true
    }

    render() {
        console.log(this.props);
        let { title, leftShow, rightShow } = this.props;
        return (
            <div>
                { leftShow && <button>返回</button> }
                navbar - {title}
                { rightShow && <button>home</button> }
            </div>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string,
    leftShow: PropTypes.bool,
    rightShow: PropTypes.bool
}
