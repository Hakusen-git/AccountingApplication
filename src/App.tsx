import React, {useState} from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import AddBar from './components/AddBar/AddBar'
import Accounts from './components/Accounts/Accounts'
import './App.css';
import User from './components/User/User';
import Homepage from './components/Homepage/Homepage';
import TopBar from './components/TopBar/TopBar';
import Chart from './components/Chart/Chart';



function App() {

  const [customerid, setCustomerid] = useState<string | null>('')
  
  const setCustomerID = async (input: string | null) => {
     setCustomerid(input)
  }

  const [isLoading, setIsLoading] = useState(false)

  const toggleIsLoading = async () => {
    setIsLoading(!isLoading)
  }

  const [asset, setAsset] = useState<number>(0)
  const [liability, setLiability] = useState<number>(0)
  const [equity, setEquity] = useState<number>(0)
  const [revenue, setRevenue] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  const handleAsset = async (input:number) =>{
    setAsset(input)
    console.log(input)
  } 
  const handleLiability = async (input:number) =>{
    setLiability(input)
  } 
  const handleEquity = async (input:number) =>{
    setEquity(input)
  } 
  const handleRevenue = async (input:number) =>{
    setRevenue(input)
  } 
  const handleExpense = async (input:number) =>{
    setExpense(input)
  } 



  return (
    <div className="App" style={{height: '100vh'}}>
      
      <BrowserRouter>
      
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/apps" render={props => 
          <div>
            <TopBar customerId={customerid} assetAmount={asset} equityAmount={equity} expenseAmount={expense} liabilityAmount={liability} revenueAmount={revenue} toggleLoading={() => toggleIsLoading()}/>
            <User setCustomerID={(a: string | null) => setCustomerID(a)} id={customerid} toggleAccount={() => toggleIsLoading()}/>
            <AddBar id={customerid} toggle={() => toggleIsLoading()}/>
            <Accounts {...props} 
              handleAsset={(a: number) => handleAsset(a)} 
              handleEquity={(a: number) => handleEquity(a)}
              handleExpense={(a: number) => handleExpense(a)}
              handleLiability={(a: number) => handleLiability(a)}
              handleRevenue={(a: number) => handleRevenue(a)}
              id={customerid} 
              refresh={isLoading}  
              toggleDelete={() => toggleIsLoading()} />
          </div>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
