import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';

const PublicRouteLists = () => (
    <>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </>
);

const PublicRoutes = ({ component: Component, ...rest }) => {
    return ( <Route {...rest} render={(props) => ( isAuthenticated ? <Redirect to='/' /> : <PublicRouteLists />)} )
}

export default PublicRoutes;