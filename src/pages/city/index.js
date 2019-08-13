import React from 'react';
import { Card, Table, Modal, Button, Form, Input, Select,Radio, message } from 'antd'
import moment from 'moment'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

const FormItem = Form.Item;
const { Option } = Select;

class City extends React.Component {

    state = {
        dataSource:[],
        modalFag:false
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
            url: '/city/list',
            method:'post',
            data:{
                params:data
            }
        }).then(res=>{

            // console.log(res)

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

    addCity=()=>{
        this.setState({
            modalFag:true
        })
    }

    handleOpen=()=>{

        console.log("~")

        const cityInfo = this.cityForm.props.form.getFieldsValue()

        axios.ajax({
            url: '/city/open',
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
                title: '城市ID',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'cityName'
            },
            {
                title: '用车模式',
                dataIndex: 'useModal',
                render(useModal){
                    return useModal==1?"指定":"禁停区"
                }
            },
            {
                title: '授权加盟商',
                dataIndex: 'store'
            },
            {
                title: '营运模式',
                dataIndex: 'sellModel',
                render(sellModel){
                    return sellModel==1?"自营":"加盟"
                }
            },
            {
                title: '城市管理员',
                dataIndex: 'cityManage',
                render(arr){
                    return arr.map((item,index)=>{
                        return item.name
                    }).join(",")
                }
            },
            {
                title: '城市开通时间',
                dataIndex: 'startTime',
                render:(startTime)=>{
                    return moment(startTime).format("YYYY-MM-DD HH:mm:ss")
                }
            },
            {
                title: '操作时间',
                dataIndex: 'handleTime'
            },
            {
                title: '操作人',
                dataIndex: 'handleAdmin'
            }
        ];

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card className="card-wrap">
                    <Form layout="inline">
                        <FormItem label="城市">
                            {
                                getFieldDecorator('userName',{
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
                        <FormItem label="状态">
                            {
                                getFieldDecorator('city',{
                                    initialValue: 'all'
                                })(
                                    <Select style={{ width: 120 }}>
                                        <Option value="all">全部</Option>
                                        <Option value="runing">开通</Option>
                                        <Option value="close">关闭</Option>
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
                    <div>
                        <Button type="primary" onClick={this.addCity}>新增城市</Button>
                    </div>
                </Card>
                <Card className="table-btn-margin">
                    <Table
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