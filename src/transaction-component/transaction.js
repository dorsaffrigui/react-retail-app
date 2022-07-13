import './transaction.scss'
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


function Transaction() {
  return (
    <div className="transaction"> 
        <div className="transaction-item">
          <div className="icon">
            <div className="icon-pic">
              <span className="material-icons">
                width_normal
              </span>
            </div>
          </div>
          <div className="transaction-name">
            <div className="transaction-title">
              <span> Lorem Ipsum</span>
              <div className="transaction-amount">
                <span> $ -651.00 </span>
              </div>      
            </div>
            <div className="transaction-subtitle">
              <span> Lorem ipsum dolorum </span>
            </div>
          </div>
        </div>
    </div>
  
  );
}

export default Transaction;
