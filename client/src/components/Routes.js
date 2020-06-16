/* eslint-disable */ 
import React, { memo } from 'react';

import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Signup from '../pages/signup';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import {AuthContext} from '../contexts/AuthContext';


const PublicRoutes = () =>(
  <Switch>
    {console.log('Public Routes should load')}
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Signup} />
    <Redirect to="/signin" />
  </Switch>   
);

const ProtectedRoutes = () =>(
  <Switch>
    {console.log('Protected Routes should load')}
    <Route path="/" component={Dashboard} />
  </Switch>   
);

const Routes = (isAuth) =>  {
  console.log("Routes loaded", isAuth);
  if(isAuth){
    return <ProtectedRoutes />
  } else return <PublicRoutes />;
};


// const Routes = () => (
//   <AuthContext>
//     {({ authUser }) => (
//       authUser ? <ProtectedRoutes /> : <PublicRoutes />
//     )}
//   </AuthContext>
// );

export default Routes;