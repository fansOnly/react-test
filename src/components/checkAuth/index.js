import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class CheckLogin extends React.Component {
    componentDidMount () {
        const { match, location, history } = this.props
        // 用户登录判断
        const user = localStorage.getItem('user');
        if(!user) {
            // <Redirect to='/login' />
            history.replace({pathname: '/login'});
            console.log(location.pathname)
            console.log('login')
        }
    }
    render () {
        return null;
    }
}

CheckLogin.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(CheckLogin);