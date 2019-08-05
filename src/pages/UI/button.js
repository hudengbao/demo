import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'

export default class ButtonPage extends React.Component {

    state = {
        loading:true,
        size:'default'
    }

    handleClick(){
        this.setState({
            loading:false
        })
    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            size:e.target.value
        })
    }

    render(){
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">按钮</Button>
                    <Button>按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                    <Button loading={this.state.loading} shape="circle"></Button>
                    <Button type="primary" onClick={this.handleClick.bind(this)}>按钮</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button.Group>
                        <Button icon="left">前进</Button>
                        <Button icon="right">后退</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮大小">
                    <Radio.Group size={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">默认</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>按钮</Button>
                </Card>
            </div>
        )

    }
}