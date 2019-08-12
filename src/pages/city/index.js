import React from 'react';
import { Card, Table, Modal, Button, Form, Input, Select,Radio } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class City extends React.Component {

    state = {
        dataSource:[],
        selectedRowKeys:[]
    }

    params = {
        page:1
    }

    componentDidMount(){

        this.request()

    }

    request=()=>{

        let _this = this

        axios.ajax({
            url: '/city/list',
            method:'post',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then(res=>{

            console.log(res)

            this.setState({
                dataSource: res.list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current
                    _this.request()
                })
            })
        })
    }

    handleReset=()=>{
        this.props.form.resetFields()
    }

    handleSubmit = (e)=>{

        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    }

    render() {

        const columns = [
            {
                title: 'id',
                width:100,
                dataIndex: 'id',
                key: "id",
                filters:[
                    {"text":"111","value":1},
                    {"text":"2222","value":2},
                    {"text":"3333","value":3},
                ],
                onFilter: (value, record) => record.id == value,
            },
            {
                title: '姓名',
                width:100,
                dataIndex: 'userName',
                key: "userName"
            },
            {
                title: '年龄',
                width:80,
                dataIndex: 'age',
                key: "age",
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortDirections: ['descend'],
            },
            {
                title: '性别',
                width:200,
                dataIndex: 'sex',
                key: "sex",
                render(sex){
                    return sex == 1 ? '男' :'女'
                }
            },
            {
                title: '生日',
                width:200,
                dataIndex: 'date',
                key: "date"
            },
            {
                title: '住址',
                width:160,
                dataIndex: 'address',
                key: "address"
            },
            {
                title: '状态',
                width:80,
                dataIndex: 'status',
                key: "status",
                render(status){

                    const config = {
                        '1' :'开心',
                        '2' :'难过',
                        '3' :'大哭'
                    }

                    return config[status]
                }
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
                        <Button type="primary" onClick={this.delClick}>新增城市</Button>
                    </div>
                </Card>
                <Card className="card-wrap">
                    <Table
                        bordered 
                        dataSource={this.state.dataSource} 
                        columns={columns}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )

    }
}


export default  Form.create()(City)