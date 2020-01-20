import React from 'react';
import { isAuthenticated} from './auth';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Hall from './pages/hall';
import Kitchen from './pages/kitchen';
import OrderReady from './pages/orderReady';
import Option from './pages/home';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ): (
            <Redirect to={{ pathname: props.path, state: { from: props.location}}} />
        )
        } 
    />
);

const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
    <Switch>
        <Route exact path='/' component={Option} />
        <PrivateRoute path='/salao' component={Hall} />
        <PrivateRoute path='/cozinha' component={Kitchen} />
        <PrivateRoute path='/pedidosprontos' component={OrderReady}/>
    </Switch>
    </Router>
);

export default Routes