import './App.css';
import InitialPage from './components/InitialPage';
import Header from './components/Header';
import OperationsPage from './components/OperationsPage';
import BreakdownPage from './components/BreakdownPage';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const balanceGenerator = (transactionsData) => {
  let totalBalance = 0
  for (let transaction of transactionsData) {
    totalBalance += transaction.amount

  }
  return totalBalance
}


function App() {
  let [transactionData, setTransactionData] = useState([])
  let [transactionsBalance, setBalance] = useState(balanceGenerator(transactionData))
  let [breakdownData, setBreakdownData] = useState([])

  useEffect(() => {
    fetchTransactionData();
    setNewBalance();
    fetchCategoriesBreakdown();

  });

  const fetchTransactionData = async () => {
    const response = await fetch('http://localhost:3030/transactions');
    const data = await response.json();
    setTransactionData(data);
  };

  const setNewBalance = async () => {
    const newBalance = balanceGenerator(transactionData)
    setBalance(newBalance)
  }

  const fetchCategoriesBreakdown = async () => {
    const response = await fetch('http://localhost:3030/breakdown');
    const data = await response.json();
    setBreakdownData(data);
  };

  const addTransaction = async (transactiontoAdd) => {
    fetch('http://localhost:3030/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactiontoAdd)
    })
      .then(response => {
        response.json()
             
      })
  }

  const deleteTransaction = async (transactionID) => {
    fetch(`http://localhost:3030/delete/${transactionID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        response.json()
       
      })
    
      
  }

  return (
    <Router>

      <div>
        <Header balance={transactionsBalance} />
        <Routes>
          <Route path="/" element={<InitialPage transactionData={transactionData} deleteTransaction={deleteTransaction}/>} />
          <Route path="/Operations" element={<OperationsPage addTransaction={addTransaction} />} />
          <Route path="/Breakdown" element={<BreakdownPage categoryBreakdownData={breakdownData} />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;
