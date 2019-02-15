/*
 * action 类型
 */
export const LOGIN_TODO = 'LOGIN_TODO'
export const LOGOUT_TODO = 'LOGOUT_TODO'

/**
 * 其他的常量
 */

/**
 * action 创建函数
 */
export const LoginIn = () => {
    return {
        type: LOGIN_TODO
    }
}

export const LoginOut = () => {
    return {
        type: LOGOUT_TODO
    }
}