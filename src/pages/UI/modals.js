import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'

export default class ButtonPage extends React.Component {

    state = {
        loading:true,
        size:'default'
    }

    handleClick1(){
        
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
                <Card title="模态弹窗" className="card-wrap">
                    <Button type="primary" onclick={this.handleClick1(1)}>基础</Button>
                    <Button type="primary" onclick={this.handleClick1(2)}>按钮</Button>
                    <Button type="primary" onclick={this.handleClick1(3)}>按钮</Button>
                    <Button type="primary" onclick={this.handleClick1(4)}>按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button type="download" type="primary">下载</Button>
                </Card>
            </div>
        )

    }
}