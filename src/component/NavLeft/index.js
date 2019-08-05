import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.less'
import menuConfig from './../../config/menuConfig'
import { Link } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(menuConfig)

        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return(
                <Menu.Item title={item.title} key={item.key}>
                    <Link to={item.key} >{item.title}</Link>
                </Menu.Item>
            ) 
        })
    }

    render() {
        return (
            <div>
                <div className="logo" >
                    <img src='/assets/logo.svg' alt=''/>
                    <h1>hello</h1>
                </div>
                <div>
                    <Menu theme="dark">
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
        )
    }
}        