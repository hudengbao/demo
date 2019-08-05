import React from 'react'
import { Form, Button, DatePicker, Input, Card, InputNumber, Switch, Checkbox, Radio, Select, Row, Col, Upload, Icon, message } from 'antd';
import moment from 'moment'

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

class FormPage extends React.Component {

    state = {
        logoLoading: false,
    };

    handleLogoChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                imageUrl,
                loading: false,
            }),
            );
        }
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs:24,
                sm:4
            },
            wrapperCol: {
                xs:24,
                sm:10
            }
        }

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
            );
        const { imageUrl } = this.state;

        return (
            <div>
                <Card title="行内表单">
                    < Form {...formItemLayout}>
                        < FormItem label="姓名" >
                            {
                                getFieldDecorator('userName',{
                                    initialValue: '',
                                    rules: [
                                        { 
                                            required: true,
                                            message: "密码不能为空"
                                            }
                                    ]
                                })(
                                    <Input placeholder="姓名"/>
                                )
                            }
                        </FormItem>
                        < FormItem label="密码" >
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
                                    <Input placeholder="密码"/>
                                )
                            }
                        </FormItem>
                        < FormItem label="性别">
                            {
                                getFieldDecorator('sex',{
                                    initialValue: 'male'
                                })(
                                    <RadioGroup>
                                        <Radio value="male">男</Radio>
                                        <Radio value="woman">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        < FormItem label="年龄">
                            {
                                getFieldDecorator('age',{
                                    initialValue: 18
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        < FormItem label="状态">
                            {
                                getFieldDecorator('currentState',{
                                    initialValue: "2"
                                })(
                                    <Select mode="multiple">
                                        <Option key="1" >1</Option>
                                        <Option key="2" >2</Option>
                                        <Option key="3" >3</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        < FormItem label="是否已婚">
                            {
                                getFieldDecorator('married',{
                                    valuePropName:'checked',
                                    initialValue: false
                                })(
                                    <Switch></Switch>
                                )
                            }
                        </FormItem>
                        < FormItem label="生日">
                            {
                                getFieldDecorator('date',{
                                    initialValue: moment('2018-11-12')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH-mm-ss"/>
                                )
                            }
                        </FormItem>
                        < FormItem label="地址">
                            {
                                getFieldDecorator('address',{
                                    initialValue: ''
                                })(
                                    <TextArea placeholder="Autosize height "
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                    />
                                )
                            }
                        </FormItem>
                        < FormItem label="头像">
                            {
                                getFieldDecorator('logo',{
                                    initialValue: ''
                                })(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                    </Upload>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )

    }
}

export default Form.create()(FormPage);
