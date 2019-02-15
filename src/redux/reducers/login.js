import { LOGIN_TODO, LOGOUT_TODO } from '../actions/index';

function loginTodo(state = [], action) {
    switch (action.type) {
        case LOGIN_TODO:
            return Object.assign({}, state, {
                loggedIn: true
            })
        case LOGOUT_TODO:
            return Object.assign({}, state, {
                loggedIn: false
            })
        default:
            return state
    }
}

export default loginTodo;