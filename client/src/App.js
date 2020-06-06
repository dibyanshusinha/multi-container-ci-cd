import React, { PureComponent } from 'react';
import Loading from './components/Loading';
import {
  BrowserRouter as Router, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';

import Routes from './components/Routes';

const AuthRouterComponent = (props) =>{

  //while checking show loading
  const isAuthenticated = window.localStorage.getItem('isAuth');
  console.log(isAuthenticated);

   if(isAuthenticated === 'false'){
     //public routes - redirect to signin
     return <Loading/>
   }

   //protectedrotes and redirect /home
   return props.children;
 
  
}


const AuthWrapper = withRouter(AuthRouterComponent);


class App extends PureComponent {
  render() {
    return (
      <Router>
          <AuthWrapper>
            <Routes />
          </AuthWrapper>
      </Router>
    );
  }
}

export default App;
