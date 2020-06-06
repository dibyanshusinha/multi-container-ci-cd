import React from 'react';

import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Signup from '../pages/signup';
import Login from '../pages/login';
const Routes = () =>(    
    <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
);

export default Routes;