import React from 'react';
import { Form, Input, Button, Checkbox, Icon, message } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        remember: true,
        loggedIn: false
    }
    componentDidMount () {
        const { history } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            history.push('/');
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, history, location } = this.props;
        console.log('location', location);
        form.validateFields((err, values) => {
            if(!err) {
                console.log('当前表单输入', values);
                const { username, password } = values;
                if (username === 'test' && password === '1') {
                    localStorage.setItem('user', JSON.stringify(values));
                    history.push(location.state.from.pathname);
                } else {
                    message.error('帐号密码错误！');
                }
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login-box'>
                <div className='login-title'>后台管理系统</div>
                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名'}]
                        })(
                            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='username' />
                        )}
                    </Form.Item>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}]
                        })(
                            <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='password' />
                        )}
                    </Form.Item>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href="/">忘记密码？</a>
                        <Button type="primary" block htmlType="submit" className="login-form-button">登录</Button>
                        <p>没有账号？<a href="/" className="">现在注册</a></p>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    form: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default Form.create({name:'login_form'})(LoginForm);