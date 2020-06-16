/* eslint-disable */ 
import React, { useState, useEffect, useContext, useMemo }  from 'react';
import Loading from './components/Loading';
import {
  BrowserRouter as Router, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';

import Routes from './components/Routes';
import AuthContext from './contexts/AuthContext';


const App = () =>{

  const [authUser, setAuthUser] = useState();
  const [authLoader, setauthLoader] = useState(true);

  const memoisedAuthContext = useMemo(() => ({ authUser, setAuthUser }), [authUser, setAuthUser]);





  //when App gets loaded check once
  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fetchData = async() => {
      console.log('From AuthContext');
      if(localStorage.getItem('isAuth')==='true'){
        await delay(3000);
        setAuthUser({ email: 'abc', name: 'Dibs' });
        setauthLoader(false);
      }else{
        setauthLoader(false);
      }     
    }

    fetchData();
  }, []);  



  return (
    <Router>
        <AuthContext.Provider value={ memoisedAuthContext }>
        {console.log('Ran Auth context', authLoader, authUser)}
        {authLoader ? <Loading /> : authUser ? <Routes isAuth={true} />: <Routes isAuth={false} />}
        </AuthContext.Provider>
    </Router>
  );
}

export default App;