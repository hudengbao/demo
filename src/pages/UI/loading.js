import React from 'react';
import {Card, Switch, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Login extends React.Component {

    state = {
        loading:false
    }

    toggle = value => {
        this.setState({ loading: value });
      };

    render(){

        const icon = <Icon type="star" style={{fontSize:24}}></Icon>

        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin />
                    <Spin size="large"></Spin>
                </Card>
                <Card title="自定义图标" className="card-wrap">
                    <Spin indicator={icon} size="large"></Spin>
                </Card>
                <Card title="包裹" className="card-wrap">
                    <Spin tip="加载中">
                        <div style={{height:50}}>你好</div>
                    </Spin>
                </Card>
                <Card title="控制加载" className="card-wrap">
                    <Switch checked={this.state.loading} onChange={this.toggle} style={{marginBottom:20}}/>
                    <Spin tip="加载中" spinning={this.state.loading}>
                        <Alert message="欢迎" description="描述" type="info"/>
                    </Spin>
                </Card>
            </div>
        )

    }
}