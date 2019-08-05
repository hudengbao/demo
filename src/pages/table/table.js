import React from 'react';
import { Form, Button, Input, Card, message, Icon, Checkbox } from 'antd';

class FormPage extends React.Component {

    handleSubmit = (e)=>{
        e.preventDefault();

        let userInfo = this.props.form.getFieldsValue();

        console.log(userInfo)

        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 登陆成功`)
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;

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
                        <Form.Item>
                            <Button type="primary">登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="水平表单">
                    <Form style={{width:280}}>
                        <Form.Item label="姓名">
                            {
                                getFieldDecorator('userName',{
                                    initialValue: '',
                                    rules: [
                                        { 
                                            required: true,
                                            message: "密码不能为空"
                                         },
                                         {
                                             max:6,
                                             message:'太长'
                                         },
                                         {
                                             min:2,
                                             message:'太短'
                                         }
                                    ]
                                })(
                                    <Input placeholder="姓名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="密码">
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue: '',
                                    rules: [
                                        { 
                                            required: true,
                                            message: "密码不能为空"
                                         }
                                    ]
                                })(
                                    <Input  prefix={<Icon type="lock" />} placeholder="密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    initialValue: true,
                                    valuePropName: 'checked'
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )

    }
}

export default Form.create()(FormPage);
