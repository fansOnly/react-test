import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Index extends React.Component {
    state = {
        count: 0
    }
    test = () => {
        let { count } = this.state;
        let countx = count + 1;
        console.log('test..', countx);
        this.setState({
            count: countx
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div>you are not logged in.</div>
                <div className="t1">this is home page.</div>
                <p><a href="/login">去登陆</a></p>
                <p><a href="/index/pageA">page A</a></p>
                <p><Link to='/index/pageA'> page A....</Link></p>
                <p><a href="/test">test</a></p>
                <div className="login-title" onClick={this.test}>计数器: {count}</div>
            </div>
        )
    }
}

export default Index;