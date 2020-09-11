import React, {useState} from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import AddBar from './components/AddBar/AddBar'
import Account from './components/Account/Account'
import UserInterface from './components/common/UserInterface'
import './App.css';
import Accounts from './components/Accounts/Accounts';

function App() {


  return (
    <div className="App" >
      <Header />
      <AddBar/>
      <BrowserRouter>
        <Switch>
        <Route path="/" component={Accounts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
