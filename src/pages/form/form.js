import React from 'react';
import { Form, Button, Input, Card } from 'antd';

class FormPage extends React.Component {

    render() {
        return (
            <div>
                <Card title="行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="姓名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="密码"/>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )

    }
}

export default Form.create()(FormPage);
