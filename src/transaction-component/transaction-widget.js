import './transaction-widget.scss'
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import '@material/mwc-icon-button';
import '@finastra/sidenav';
import '@finastra/logo';
import '@material/mwc-list';
import '@finastra/launchpad';
import '@finastra/base-card';
import '@finastra/button-toggle-group';
import '@finastra/button-toggle';
import '@finastra/search-input';
import { Grid } from '@mui/material';
import DateItem from './date-item.js';
import Transaction from './transaction.js';


function Sheet() {
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
                <DateItem>
                </DateItem>
                <Transaction></Transaction>
                <Transaction></Transaction>
                <DateItem>
                </DateItem>
                <Transaction></Transaction>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  
  );
}

export default Sheet;
