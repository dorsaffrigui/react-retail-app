// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import '@material/mwc-icon-button';
import '@finastra/sidenav';
import '@finastra/logo';
import '@material/mwc-list';
import '@finastra/logo';
import { Grid } from '@mui/material';
import Sheet from '../transaction-component/transaction-widget';
import QuickTransfer from '../quicktransfer-component/quick-transfer-widget';


import { Route, Routes, Link } from 'react-router-dom';

export function App() {

  return (
    <div className="App">
      <fds-sidenav type="modal">
      <div slot="sidenavContent">
        <div className="fds-sidenav-header">
          <fds-logo></fds-logo>
        </div>
        <div className="fds-sidenav-list">
          <mwc-list activatable="">
            <mwc-list-item selected="" activated="" graphic="icon">
              <span>Home</span>
              <mwc-icon slot="graphic">home</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Applications</span>
              <mwc-icon slot="graphic">dashboard</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Tools</span>
              <mwc-icon slot="graphic">extension</mwc-icon>
            </mwc-list-item>
            <mwc-list-item graphic="icon">
              <span>Settings</span>
              <mwc-icon slot="graphic">settings</mwc-icon>
            </mwc-list-item>
          </mwc-list>
        </div>
      </div>
      <div slot="appContent">
        <fds-app-bar appname="Super App" logoredirecturi="">
          <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
          <mwc-icon-button icon="search" slot="actions"></mwc-icon-button>
          <mwc-icon-button icon="notifications_none" slot="actions"></mwc-icon-button>
          <mwc-icon-button icon="help_outline" slot="actions"></mwc-icon-button>
          <fds-user-profile slot="actions" username="Raya Hristova">
          <div slot="userInfo">raya.hristova@finastra.com</div>
          <div slot="actions">
            <fds-button fullwidth="" label="Logout" icon="logout"></fds-button>
            <fds-button text="" fullwidth="" label="View profile"></fds-button>
          </div>
          </fds-user-profile>
          <mwc-icon-button icon="more_vert" slot="actions"></mwc-icon-button>
        </fds-app-bar>
        <div className="header">
        </div>
        <div className="content">
          <div className="main-content">
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                  <Sheet>
                  </Sheet>
              </Grid>
              <Grid item xs={6} md={4}>
                <QuickTransfer></QuickTransfer>
              </Grid>
              <Grid item xs={6} md={8}>
              </Grid>
              <Grid item xs={6} md={4}>
                <span>xs=6 md=8</span>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      </fds-sidenav>
    </div>
  );
}

export default App;
