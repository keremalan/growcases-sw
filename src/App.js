import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './pages/main';
import SSS from './pages/sss';
import OpenCase from './pages/opencase';
import Click from './pages/click';
import Login from './pages/login';
import Password from './pages/password';
import Register from './pages/register';
import UserProfile from './pages/userprofile';
import Dashboard from './pages/dashboard';

const App = () => (
  <>
  <Header></Header>
  <BrowserRouter>
    <Route exact path="/" component={ Main } />
    <Route exact path="/Anasayfa" component={ Main } />
    <Route exact path="/SSS"  component={ SSS } />
    <Route exact path ="/Opencase" component= { OpenCase } />
    <Route exact path="/click" component= { Click } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/loginp" component={ Password } />
    <Route exact path="/register" component={ Register } />
    <Route exact path ="/profile" component= { UserProfile } />
    <Route exact path="/dashboard" component={ Dashboard } />
  </BrowserRouter>
  </>
)

export default App;