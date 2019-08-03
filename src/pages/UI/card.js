import React from 'react'
import { Card, Row, Col, Icon, Modal } from 'antd'
import './ui.less'

const { Meta } = Card;

export default class CardPage extends React.Component {

    state = {
        imgUrl :'',
        visible:false
    }

    showImgModal = (value)=>{
        this.setState({
            imgUrl : '/image/'+value,
            visible: true
        })
    }

    render(){

        const imgList = [
            [ '1.jpg', '2.jpg', '3.jpg', '1.jpg', '2.jpg' ],
            [ '2.jpg', '3.jpg', '1.jpg', '1.jpg', '3.jpg' ],
            [ '1.jpg', '2.jpg', '3.jpg', '1.jpg', '1.jpg' ],
            [ '2.jpg', '3.jpg', '1.jpg', '1.jpg', '3.jpg' ],
            [ '1.jpg', '2.jpg', '3.jpg', '1.jpg', '2.jpg' ]
        ]

        const imgs = imgList.map((list)=>list.map((item,index)=>
                <Card key={index}
                    hoverable
                    style={{ marginTop: 20 }}
                    cover={<img alt="example" src={'/image/'+item} onClick={()=>{this.showImgModal(item)}}/>}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            )
        )

        return (
            <div>
                <Row gutter={10} >
                    <Col span={5}> {imgs[0]} </Col>
                    <Col span={5}> {imgs[1]}  </Col>
                    <Col span={5}> {imgs[2]}  </Col>
                    <Col span={5}> {imgs[3]}  </Col>
                    <Col span={4}> {imgs[4]}  </Col>
                </Row>

                <Modal visible={this.state.visible} title="预览"
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                >
                    <img src={this.state.imgUrl} alt="" style={{width:"100%"}}/>
                </Modal>
            </div>
        )
 
    }
}