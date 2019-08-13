import React from 'react';
import { Card, Table, Modal, Button, Form, DatePicker, Input, Select,Radio, message } from 'antd'
import moment from 'moment'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

const FormItem = Form.Item;
const { Option } = Select;

class City extends React.Component {

    state = {
        dataSource:[],
        modalFag:false,
        selectedRowKeys:[],
        selectedRows:[]
    }

    params = {
        page:1
    }

    componentDidMount(){

        this.getList()

    }

    getList=()=>{

        let data = Object.assign(this.props.form.getFieldsValue(),{page:this.params.page})

        let _this = this

        axios.ajax({
            url: '/order/list',
            method:'post',
            data:{
                params:data
            }
        }).then(res=>{

            this.setState({
                dataSource: res.list.map((item,index)=>{
                    item.key = index;
                    return item
                }),
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current
                    _this.getList()
                })
            })
        })
    }

    openOrderDetail=()=>{

        if(this.state.selectedRows.length> 0){
            let orderId = this.state.selectedRows[0].orderId
            window.open(`/#/common/order/orderDetail/${orderId}`,"_blank")
        }else{
            Modal.info({
                title:'提示',
                content:'请选择订单'
            })
        } 
    }

    handleOpen=()=>{

        const cityInfo = this.cityForm.props.form.getFieldsValue()

        axios.ajax({
            url: '/order/list',
            method:'post',
            data:{
                params:{
                    page:cityInfo
                }
            }
        }).then(res=>{
            message.success("开通成功")
            this.setState({
                modalFag:false
            })
            this.cityForm.props.form.resetFields()
            this.getList()
        })
    }

    handleReset=()=>{
        this.props.form.resetFields()
    }

    handleSubmit = (e)=>{

        e.preventDefault();

        this.getList()
    }

    render() {

        const columns = [
            {
                title: '订单编号',
                dataIndex: 'id'
            },
            {
                title: '车辆编号',
                dataIndex: 'carNum'
            },
            {
                title: '用户名',
                dataIndex: 'suerName'
            },
            {
                title: '手机号码',
                dataIndex: 'phone'
            },
            {
                title: '里程',
                dataIndex: 'distance'
            },
            {
                title: '行程时长',
                dataIndex: 'useTime'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },    
            {
                title: '开始时间',
                dataIndex: 'startTime'
            },
            {
                title: '结束时间',
                dataIndex: 'endTime'
            },
            {
                title: '订单金额',
                dataIndex: 'totalMoney'
            },
            {
                title: '实付金额',
                dataIndex: 'payMoney'
            }
        ];

        const { getFieldDecorator } = this.props.form;

        const { selectedRowKeys } = this.state;
        
        const rowSelection = {
            selectedRowKeys:selectedRowKeys,
            type:'radio',
            columnTitle:'选择',
            onChange: (selectedRowKeys, selectedRows) => {

                this.setState({
                    selectedRowKeys, 
                    selectedRows
                })
            }
        };

        return (
            <div>
                <Card className="card-wrap">
                    <Form layout="inline">
                        <FormItem label="城市">
                            {
                                getFieldDecorator('city',{
                                    initialValue: 'all'
                                })(
                                    <Select style={{ width: 120 }}>
                                        <Option value="all">全部</Option>
                                        <Option value="上海">上海</Option>
                                        <Option value="杭州">杭州</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="订单时间">
                            {
                                getFieldDecorator('startTime')(
                                    <DatePicker showTime format="YYYY-MM-DD HH-mm-ss"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('endTime')(
                                    <DatePicker showTime format="YYYY-MM-DD HH-mm-ss"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="状态">
                            {
                                getFieldDecorator('status',{
                                    initialValue: 'all'
                                })(
                                    <Select style={{ width: 120 }}>
                                        <Option value="all">全部</Option>
                                        <Option value="runing">进行中</Option>
                                        <Option value="close">结束</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        < FormItem>
                            <div>
                                <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                                <Button  onClick={this.handleReset}>重置</Button>
                            </div>
                        </FormItem>
                    </Form>
                </Card>
                <Card className="card-wrap">
                    <Button type="primary" onClick={this.openOrderDetail} style={{marginRight:20}}>订单详情</Button>
                    <Button type="primary" onClick={this.addCity}>结束订单</Button>
                </Card>
                <Card className="table-btn-margin">
                    <Table
                        rowSelection={rowSelection}
                        bordered 
                        dataSource={this.state.dataSource} 
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
                <Modal
                    title="开通城市"
                    visible={this.state.modalFag}
                    onCancel={()=>{
                        this.setState({
                            modalFag:false
                        })
                    }}
                    onOk={this.handleOpen}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{
                        this.cityForm = inst
                    }}/>
                </Modal>
            </div>
        )

    }
}

class OpenCityForm extends React.Component{

    

    render(){

        const formItemLayout = {
            labelCol:{
                span:4
            },
            wrapperCol:{
                span:20
            }
        }

        const {getFieldDecorator} = this.props.form

        return (
            <Form {...formItemLayout}>
                <FormItem label="选择城市">
                    {
                        getFieldDecorator("cityId",{
                            initialValue:'shanghai'
                        })(
                            <Select style={{width:100}}>
                                <Option value="shanghai">上海</Option>
                                <Option value="beijing">北京</Option>
                                <Option value="hangzhou">杭州</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator("opModal",{
                            initialValue:'1'
                        })(
                            <Select style={{width:100}}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

OpenCityForm = Form.create()(OpenCityForm)

export default  Form.create()(City)