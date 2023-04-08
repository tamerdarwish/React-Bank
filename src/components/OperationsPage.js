import { Link } from 'react-router-dom';
import './OperationsPage.css'
import React, { useState, useEffect } from "react";

const OperationsPage = ({addTransaction}) => {

    const [amountInput, setAmountInput] = useState('');
    const [vendorInput, setVendorInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('');

    const amountHandleChange = (event) => {
        setAmountInput(event.target.value);
    }
    const vendorHandleChange = (event) => {
        setVendorInput(event.target.value);
    }
    const categoryHandleChange = (event) => {
        setCategoryInput(event.target.value);
    }

    let transactionToAdd = {amount:amountInput, category:categoryInput, vendor : vendorInput}

    const depositClick = ()=>{
        addTransaction(transactionToAdd)
    }
    



    return (
        <div className='transactions-container'>  
            <h2><b className='transactions-title'>Insert Transactions</b></h2>
            <label className='transactions-label'>Transaction Amount:</label>
            <input type="number" name="amount" className='transactions-input'onChange={amountHandleChange}/>
            <br />
            <label className='transactions-label'>Transaction Vendor:</label>
            <input type="text" name="vendor" className='transactions-input' onChange={vendorHandleChange}/>
            <br />
            <label className='transactions-label'>Transaction Category:</label>
            <input type="text" name="category" className='transactions-input' onChange={categoryHandleChange}/>
            <div className='transactions-buttons'>
            < Link to={'/'}><button type="button" className='transactions-deposit-button' onClick={depositClick}>Deposit</button></Link>
            < Link to={'/'}> <button type="button"  className='transactions-withdraw-button'>Withdraw</button> </Link>
            </div>
        </div>

    );
}

export default OperationsPage;
