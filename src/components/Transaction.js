import './Transaction.css'
const Transaction = ({transaction, colorStatus,deleteTransaction}) => {
    const myStyle = {
        backgroundColor:colorStatus
      };

      const deleteClick = function(){
        deleteTransaction(transaction._id)
      }


    return (
        <div className="transaction-card" style={myStyle} id={transaction._id}>
            <div className="transaction-vendor">{transaction.vendor}</div>
            <div className="transaction-category">{transaction.category}</div>
            <div className="transaction-amount">{transaction.amount}</div>
            <button onClick={deleteClick}>Delete</button>
        </div>

    );
}

export default Transaction;
