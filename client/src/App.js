/* eslint-disable */ 
import React, { PureComponent } from 'react';
import Loading from './components/Loading';
import {
  BrowserRouter as Router, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';

import Routes from './components/Routes';

const delay = (ms) => { 
  return new Promise((resolve) => setTimeout(resolve, ms))
};

const renderComp = (isAuth, props)=>{
  if(isAuth){
    console.log('+++++++++++++++++')
    return props.children;
  }else {
    console.log("----------------")
    return <Loading />
  }
}

const AuthRouterComponent = (props) =>{
  let isAuth = false;
  // delay(10000).then(()=>{
  //   // isAuth = window.localStorage.getItem("auth") === "true"; 
  //   isAuth = true;
  // });

  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    isAuth = true;
    return renderComp(isAuth, props);
  });
  return renderComp(isAuth, props);
}


const AuthWrapper = withRouter(AuthRouterComponent);


class App extends PureComponent {
  render() {
    return (
      <Router>
        <AuthWrapper>
          <Routes />;
        </AuthWrapper>
      </Router>
    );
  }
}

export default App;