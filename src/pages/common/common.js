import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Footer from './../../component/Footer'
import Header from './../../component/Header'

export default class Common extends Component{
    render(){
        return (
            <div>
                <Row className="simple-page">
                    <Col span={24} className="main">
                        <Header menuType="second"/>
                    </Col>
                </Row> 
                <Row className="">
                    <Col span={24} className="main">
                        {this.props.children}
                        <Footer />
                    </Col>
                </Row> 
            </div>
        )
    }
}