import React, {useEffect, useState} from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import AddBar from './components/AddBar/AddBar'
import './App.css';
import Accounts from './components/Accounts/Accounts';
import User from './components/User/User';

function App() {

  const [customerid, setCustomerid] = useState<string | null>('')

  
  const setCustomerID = (input: string | null) => {
     setCustomerid(input)
  }

  return (
    <div className="App" >
      <Header />
      <User setCustomerID={(a: string | null) => setCustomerID(a)}/>
      <AddBar/>
      <BrowserRouter>
        <Switch>
        <Route path="/" render={props => (<Accounts {...props} id={customerid}/>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
