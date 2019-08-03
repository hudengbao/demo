import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'

export default class ButtonPage extends React.Component {

    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }

    openMessage= (type) => {
        message[type]('你好');
    };

    handleOk = ()=>{
        
    }

    render(){
        return (
            <div>
                <Card title="基本" className="card-wrap">
                    <Button type="primary" onClick={() => this.openMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.openMessage('loading')}>loading</Button>
                </Card>
            </div>
        )

    }
}