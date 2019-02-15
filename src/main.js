import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
import App from './App';

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk),
    //调用Chrome 时redux调试工具
    window.devToolsExtension?window.devToolsExtension():f=>f
))

let currentValue = store.getState();
// console.log('当前值', currentValue);
//定义一个监听的方法
let listener = () => {
    const previosValue = currentValue;
    currentValue = store.getState();
    console.log('上一个值:', previosValue, '当前值:', currentValue)
}
//创建一个监听
store.subscribe(listener);

// store.dispatch({type:'LOGIN_TODO'});
// store.dispatch({type:'LOGOUT_TODO'});



ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();