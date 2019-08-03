import React from 'react'
import { Card, Tabs, Button, Icon } from 'antd'
import './ui.less'

const { TabPane } = Tabs;

export default class ButtonPage extends React.Component {

    newTabIndex = 0;
    
    componentWillMount(){
        const panes = [
            {
                title: 'tab1',
                key: '1',
                content: 'this is content1'
            },
            {
                title: 'tab2',
                key: '2',
                content: 'this is content2'
            },
        ]

        this.setState({
            activeKey: panes[0].key,
            panes,
        })
    }

    handleChange = activeKey => {
        this.setState({ activeKey });
    };

    onChange = activeKey => {
    this.setState({ activeKey });
    };
      

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };
        
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render(){

        const operations = <Button>Extra Action</Button>;

        return (
            <div>
                <Card title="基本" className="card-wrap">
                    <Tabs onChange={this.handleChange}>
                        <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="Tab 4" key="4" disabled>
                        Content of Tab Pane 4
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="右侧添加按钮" className="card-wrap">
                    <Tabs defaultActiveKey="2" tabBarExtraContent={operations} onChange={this.handleChange}>
                        <TabPane tab="Tab 1" key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="卡片式叶签" className="card-wrap">
                    <Tabs defaultActiveKey="2" type="card" onChange={this.handleChange}>
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="增减" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key}>
                            {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )

    }
}