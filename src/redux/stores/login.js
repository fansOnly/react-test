import { connect } from 'react-redux';
import LoginForm from '../../pages/login/index';
import { LoginIn } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            console.log('0000000000000000');
            dispatch(LoginIn())
        }
    }
}

const LoginFormPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default LoginFormPage;