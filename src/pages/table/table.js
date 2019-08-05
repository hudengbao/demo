import React from 'react'
import { Card, Table, Modal, Button } from 'antd'
import axios from './../.././axios/index'

class TablePage extends React.Component {

    state = {
        dataSource:[],
        selectedRowKeys:[]
    }

    componentDidMount(){

        this.request()

    }

    request=()=>{

        axios.ajax({
            url: '/table/list',
            method:'get'
        }).then(res=>{

            this.setState({
                dataSource: res,
                selectedRowKeys: [],
                selectedRows: []
            })


            console.log(this.state.selectedRowKeys)
        })
    }

    delClick=()=>{

        let rows = this.state.selectedRows;
        let ids = [];

        rows.map((item)=>{
            ids.push(item.id)
        })

        Modal.confirm({
            title:'删除',
            content:`确认删除${ids.join(",")}`,
            onOk:()=>{
                this.request()
            }
        })
    }

   
    render() {

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: "id"
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: "userName"
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: "sex",
                render(sex){
                    return sex == 1 ? '男' :'女'
                }
            },
            {
                title: '生日',
                dataIndex: 'date',
                key: "date"
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: "address"
            },
            {
                title: '状态',
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

        const { selectedRowKeys } = this.state;
        
        const rowSelection = {
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys, 
                    selectedRows
                })
            }
        };

        return (
            <div>
                <Card>
                    <Table
                        bordered 
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                    />
                </Card>
                <Card>
                    <div style={{marginBottom:20}}>
                        <Button type="primary" onClick={this.delClick}>删除</Button>
                    </div>
                    <Table
                        bordered 
                        rowSelection={rowSelection}
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                    />
                </Card>
            </div>
        )

    }
}

export default TablePage;
