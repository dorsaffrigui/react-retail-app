import './date-item.scss'


function DateItem({
  date
}) {
  return (
    <div className="date-item"> 
        <div className="box">
            <div className="box-title">
                <span>{date}</span>
            </div>
            <div>
            </div>
        </div>         
    </div>
  
  );
}

export default DateItem;
