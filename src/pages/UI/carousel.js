import React from 'react'
import { Card, Button, Carousel } from 'antd'
import './ui.less'

export default class CarouselPage extends React.Component {

    onChange = (a, b, c)=>{
        console.log(a, b, c);
      }

   
    render(){
        return (
            <div>
                <Card title="基本" className="card-wrap">
                    <Carousel afterChange={this.onChange} effect="fade">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
                <Card title="自动播放" className="card-wrap">
                    <Carousel afterChange={this.onChange} autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                    </Carousel>
                </Card>
            </div>
        )

    }
}