import logo from './logo.svg';
import './App.css';
import './App.scss'
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import '@material/mwc-icon-button';
import '@finastra/sidenav';
import '@finastra/logo';
import '@material/mwc-list';
import '@finastra/logo';
import '@finastra/launchpad';


function App() {
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
          <fds-launchpad slot="actions"></fds-launchpad>

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
        <div className="main-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </fds-sidenav>
    </div>
    
  );
}

export default App;
