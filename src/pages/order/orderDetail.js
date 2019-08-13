import React from 'react';
import './../../style/orderDetail.less'
import axios from '../../axios/index'

export default  class Home extends React.Component {

    state = {
        orderInfo:{}
    }

    componentDidMount(){
        let orderId = this.props.match.params.orderId;
        if(orderId){
            this.getDetail(orderId)
        }
    }

    getDetail(orderId){
        axios.ajax({
            url: '/order/orderDetail',
            method:'get',
            data:{
                params:{
                    orderId:orderId
                }
            }
        }).then(res=>{

            this.setState({
                orderInfo:res
            })
        })
    }

    render() {

        const d = this.state.orderInfo

        return (

            <div>
                <div style={{height:400,backgroundColor:"gray"}}>地图模块</div>
                <div className="order-info">
                    <h4 className="title">基础信息</h4>
                    <ul className="order-ul">
                        <li className="order-li">
                            <label className="order-label">用车模式</label>
                            <span className="order-span">{d.useModel}</span>
                        </li>
                        <li>
                            <label className="order-label">订单编号</label>
                            <span className="order-span">{d.orderId}</span>
                        </li>
                        <li>
                            <label className="order-label">车辆编号</label>
                            <span className="order-span">{d.carNum}</span>
                        </li>
                        <li>
                            <label className="order-label">用户姓名</label>
                            <span className="order-span">{d.suerName}</span>
                        </li>
                        <li>
                            <label className="order-label">手机号码</label>
                            <span className="order-span">{d.phone}</span>
                        </li>
                    </ul>
                </div>
                <div className="order-info">
                    <h4 className="title">行驶轨迹</h4>
                    <ul className="order-ul">
                        <li className="order-li">
                            <label className="order-label">行程起点</label>
                            <span className="order-span">{d.startPlace}</span>
                        </li>
                        <li>
                            <label className="order-label">行程终点</label>
                            <span className="order-span">{d.endPlace}</span>
                        </li>
                        <li>
                            <label className="order-label">行驶里程</label>
                            <span className="order-span">{d.distance}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}
