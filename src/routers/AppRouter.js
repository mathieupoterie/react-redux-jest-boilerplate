import React from 'react';
import { BrowserRouter, Route, Router, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import DashBoardPage from '../components/DashBoardPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../components/LoginPage';
export const history = createHistory();
import {IntlProvider} from 'react-intl';

const AppRouter = () => (
    <IntlProvider locale="en">
        <Router history={history}>
            <Switch>
                <PublicRoute  path="/" exact={true} component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={DashBoardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </IntlProvider>
);

export default AppRouter;