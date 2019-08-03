import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

export default class ButtonPage extends React.Component {

    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }

    handleOpen = (type)=>{
        this.setState({
            [type]: true
        })
    }

    handleConfirm = (type)=>{

        Modal[type]({
            title: '确认?',
            content: '你好',
            onOk(){
                console.log("ok")
            },
            onCancel(){
                console.log("onCancel")
            }
        })
    }

    handleOk = ()=>{
        
    }

    render(){
        return (
            <div>
                <Card title="模态弹窗" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>基础</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button onClick={()=>this.handleConfirm('confirm')}>确认</Button>
                    <Button onClick={()=>this.handleConfirm('info')}>信息</Button>
                    <Button onClick={()=>this.handleConfirm('success')}>成功</Button>
                    <Button onClick={()=>this.handleConfirm('warning')}>警告</Button>
                    <Button onClick={()=>this.handleConfirm('error')}>错误</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onOk={this.handleOk}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                    >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onOk={this.handleOk}
                    onCancel={()=>{
                        this.setState({
                            showModal2:false
                        })
                    }}
                    >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    style={{top:20}}
                    title="React"
                    visible={this.state.showModal3}
                    onOk={this.handleOk}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                    >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    wrapClassName="vertical-center-modal"
                    title="React"
                    visible={this.state.showModal4}
                    onOk={this.handleOk}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}
                    >
                    <p>Some contents...</p>
                </Modal>
            </div>
        )

    }
}