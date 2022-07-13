import './quick-transfer-widget.scss';
import '@finastra/app-bar';
import '@finastra/button';
import '@finastra/user-profile';
import '@material/mwc-icon-button';
import '@finastra/sidenav';
import '@finastra/logo';
import '@material/mwc-list';
import '@finastra/logo';
import '@finastra/launchpad';
import '@finastra/base-card';
import '@finastra/textfield'
import '@finastra/button-toggle-group';

function QuickTransfer() {
  return (
    <div className="quick-transfer">
      <div className="quick-transfer-content">
        <div className="quick-transfer-title">
            <span>Quick transfers</span>
        </div>
        <div className="quick-transfer-inputs">
            <div className="sendto">
                <fds-textfield icon="person"></fds-textfield>
            </div>
            <div className="amount">
                <fds-textfield icon="money"></fds-textfield>
            </div>
        </div>
        <div clasName="action-button">
            <div className="send-button">
                <fds-button label="Send" icon="check"></fds-button>
            </div>
        </div>
      </div>
    </div>
  
  );
}

export default QuickTransfer;
