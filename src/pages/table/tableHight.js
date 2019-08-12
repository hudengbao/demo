import React from 'react'
import { Card, Table, Modal, Button } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

class TablePage extends React.Component {

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
            url: '/table/tableList2',
            method:'get',
            data:{
                params:{
                    page:this.params.page
                },
                isLoading:true
            }
        }).then(res=>{

            console.log(res)

            this.setState({
                dataSource: res.list,
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
                width:100,
                dataIndex: 'id',
                key: "id"
            },
            {
                title: '姓名',
                width:100,
                dataIndex: 'userName',
                key: "userName"
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

        const columns2 = [
            {
                title: 'id',
                width:100,
                fixed:"left",
                dataIndex: 'id',
                key: "id"
            },
            {
                title: '姓名',
                width:100,
                dataIndex: 'userName',
                key: "userName"
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
                title: '生日',
                width:200,
                dataIndex: 'date',
                key: "date"
            },
            {
                title: '生日',
                width:200,
                dataIndex: 'date',
                key: "date"
            },
            {
                title: '生日',
                width:200,
                dataIndex: 'date',
                key: "date"
            },
            {
                title: '生日',
                width:200,
                dataIndex: 'date',
                key: "date"
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
                fixed:"right",
                dataIndex: 'status',
                key: "status"
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
                <Card title="表头固定" className="card-wrap">
                    <Table
                        bordered 
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                        pagination={false}
                        scroll={{y:300}}
                    />
                </Card>
                <Card title="左侧固定" className="card-wrap">
                    <div style={{marginBottom:20}}>
                        <Button type="primary" onClick={this.delClick}>删除</Button>
                    </div>
                    <Table
                        bordered 
                        rowSelection={rowSelection}
                        dataSource={this.state.dataSource} 
                        columns={columns2}
                        scroll={{x:1860}} 
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )

    }
}

export default TablePage;
