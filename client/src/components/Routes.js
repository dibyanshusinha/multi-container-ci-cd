/* eslint-disable */ 
import React from 'react';

import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Signup from '../pages/signup';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Routes = (props) =>(    
    <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Dashboard} />
    </Switch>
);

export default Routes;