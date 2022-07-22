import './transaction-widget.scss'
import '@finastra/button-toggle-group';
import '@finastra/button-toggle';
import '@finastra/search-input';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import DateItem from './date-item.js';
import Transaction from './transaction.js';


function Sheet() {

  const serverUri = 'http://localhost:3000';
  const serviceId = 'ACCOUNT_INFORMATION_US';
  const accountId = '112';
  //const target = `${accountId}/details`;
  const target = `/details`;

  let [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await fetch(`${serverUri}/proxy?serviceId=${serviceId}&target=${target}`);
      const data = await response.json();
      console.log(data);
      setTransactions(data);
    }
    catch (e) {
      console.log(e)
    }
  }

  const list = Object.keys(transactions).map(function(key) {
    return(
      <div>
        <DateItem date={compareDates(key)}/>
        {transactions[key].map(transaction => {return(<Transaction title={transaction.title} amount={transaction.amount} accNumber={transaction.account_number}/>)})}
      </div>
    )
  });

  function compareDates(date){
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateOf = new Date(date);

    if (dateOf.getTime() == today.getTime()) {
      return "Today";
    }
    else{
      today.setDate(today.getDate()-1);
      if (today.getTime() == dateOf.getTime()){
        return "Yesterday";
      }
      else{
        return date;
      }
    }

  }

  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <div className="Sheet"> 
      <div className="sheet-item">
        <div className="header-transaction">
          <span className="title">Transactions</span>
        </div>
        <div className="layout">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <fds-button-toggle-group>
                <fds-button-toggle label="All"></fds-button-toggle>
                <fds-button-toggle label="Income"></fds-button-toggle>
                <fds-button-toggle label="Expenses"></fds-button-toggle>
                <fds-button-toggle label="Transfers"></fds-button-toggle>
              </fds-button-toggle-group>
            </Grid>
            <Grid item xs={6} md={4}>
              <fds-search-input></fds-search-input>
            </Grid>
            <Grid item xs={6} md={12}>
              <div className="transaction-list">
                {list}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  
  );
}

export default Sheet;
