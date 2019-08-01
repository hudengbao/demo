import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './component/Header'
import Footer from './component/Footer'
import NavLeft from './component/NavLeft'
import './style/app.less'

export default class App extends Component{
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">content</Row>
                    <Footer />
                </Col>
            </Row> 
        )
    }
}