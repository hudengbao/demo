import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './index.less'
// import Util from '../../utils/utils'
import moment from 'moment'
import axios from '../../axios/index'

export default class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            sysTime:'',
            weather:'',
            dayPictureUrl:''
        }
    }

    componentWillMount(){
        setInterval(()=>{
            let sysTime = moment().format('YYYY-MM-DD HH:mm:ss');
            this.setState({
                sysTime
            })
        },1000)

        this.getWeatherAPIDate()
    }

    getWeatherAPIDate = ()=>{

        let city = '杭州';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=KEC25TTtGKSh5RsQgF9WaTfGMtkXyyOK'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    weather:data.weather,
                    dayPictureUrl:data.dayPictureUrl
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>hudengbao</span>
                        <a href="##">退出</a>
                    </Col>
                </Row>
                <Row className="header-bottom">
                    <Col className="breadrumb" span={4}>首页</Col>
                    <Col className="weather" span={20}>
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">
                            <img className="weather-img" src={this.state.dayPictureUrl} alt=''/>
                        </span>
                        <span className="">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}     