import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CheckLogin from './components/checkAuth/index';
// import Index from './pages/index/index';
// import Login from './pages/Login/index';
import routes from './router/index';
import NotFound from './components/notFound/index';

import './app.scss';

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

class App extends React.Component {
    render() {
        return (
            <div>
                <CheckLogin />
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/index' push />} />
                    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                    {/* <Route path='/index' component={Index} />
                    <Route path='/login' component={Login} /> */}
                    <Route path='/404' component={NotFound} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default App;