import './transaction.scss'


function Transaction({
    title,
    amount,
    accNumber,
}) {

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
              <span> {title} </span>
              <div className="transaction-amount">
                <span> $ {amount} </span>
              </div>      
            </div>
            <div className="transaction-subtitle">
              <span> {accNumber} </span>
            </div>
          </div>
        </div>
    </div>
  
  );
}

export default Transaction;
