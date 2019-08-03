import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class ButtonPage extends React.Component {

    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    }

    openNotificationWithIcon = (type,direction) => {

        if(direction){
            notification.config({
                placement:direction
            })
        }

        notification[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. his is the content of the notification.',
        });
    };

    handleOk = ()=>{
        
    }

    render(){
        return (
            <div>
                <Card title="基本" className="card-wrap">
                    <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
                </Card>
                <Card title="方向" className="card-wrap">
                    <Button onClick={() => this.openNotificationWithIcon('info','topLeft')}>topLeft</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info','topRight')}>topRight</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info','bottomLeft')}>bottomLeft</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info','bottonRight')}>bottonRight</Button>
                </Card>
            </div>
        )

    }
}