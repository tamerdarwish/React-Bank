import Transaction from './Transaction'

const InitialPage = ({transactionData,deleteTransaction}) => {


  return (<div>
    {transactionData.map(transaction=> transaction.amount < 0 ?  <Transaction  transaction = {transaction} colorStatus='lightcoral'  deleteTransaction={deleteTransaction}/> 
    : <Transaction  transaction={transaction} colorStatus='limegreen' deleteTransaction={deleteTransaction}/>)}
  </div>
   
  );
}

export default InitialPage;
