import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class CheckLogin extends React.Component {
    componentDidMount () {
        // 用户登录判断
        const user = localStorage.getItem('user');
        if(!user) {
            <Redirect to='/login' />
        }
    }
    render () {
        return null;
    }
}

export default withRouter(CheckLogin);