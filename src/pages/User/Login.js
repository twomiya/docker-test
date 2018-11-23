import React, {Component} from 'react';
import {connect} from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import styles from './index.css'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleLoginInfo(values);
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className={styles.loginContainer}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem label="用户名">
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入账号!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem label="密码">
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                </FormItem>
            </Form>
        </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginInfo: (values) => {
            dispatch({ type: 'user/login',payload:values})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
