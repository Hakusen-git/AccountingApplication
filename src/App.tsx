import React, {useEffect, useState} from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import AddBar from './components/AddBar/AddBar'
import Accounts from './components/Accounts/Accounts'
import './App.css';
import User from './components/User/User';
import Homepage from './components/Homepage/Homepage';
import TopBar from './components/TopBar/TopBar';

interface IAccountStates{
  accountType: string,
  accountLabel: string,
  accountAmount: number,
  accountDate : string,
  accountID : string
}



function App() {

  const [customerid, setCustomerid] = useState<string | null>('')
  
  const setCustomerID = async (input: string | null) => {
     setCustomerid(input)
  }

  const [isLoading, setIsLoading] = useState(false)

  const toggleIsLoading = async () => {
    await setIsLoading(!isLoading)
  }



  return (
    <div className="App" style={{height: '100vh'}}>
      
      <BrowserRouter>
      
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/apps" render={props => 
          <div>
            <TopBar />
            <Header />
            <User setCustomerID={(a: string | null) => setCustomerID(a)} id={customerid} toggleAccount={() => toggleIsLoading()}/>
            <AddBar id={customerid} toggle={() => toggleIsLoading()}/>
            <Accounts {...props} id={customerid} refresh={isLoading} toggleDelete={() => toggleIsLoading()} />
          </div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
