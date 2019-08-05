import React from 'react'
import { Card, Table } from 'antd'
import axios from './../.././axios/index'

class TablePage extends React.Component {

    state = {
        dataSource:[]
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
                dataSource: res
            })
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
                key: "sex"
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
            }
        ];
          

        return (
            <div>
                <Card>
                    <Table
                        bordered 
                        dataSource={this.state.dataSource} 
                        columns={columns} 
                    />
                </Card>
            </div>
        )

    }
}

export default TablePage;
