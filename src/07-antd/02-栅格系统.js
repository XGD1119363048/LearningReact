import React, { Component } from 'react'
import { Col, Row } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>col-111</Col>
          <Col span={8} offset={8}>col-222</Col>
          {/* <Col span={8}>col-333</Col> */}
        </Row>
      </div>
    )
  }
}
