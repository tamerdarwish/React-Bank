import  './Header.css'
import { Link } from 'react-router-dom';

const Header = ({balance}) => {
  let color 
  if(balance>500 ) {color = 'green'} /// 500 IS MAGIC NUMBER NOTE !!!!!!
  else{color = 'red'}

  const myStyle = {
   color:color
  
  };


  return (

    <div>
      <div className="header">
        <div className="left-side">
          <Link to={'/'} ><h3>Transactions</h3> </Link>
          <Link to={'/Operations'} ><h3>Operations</h3> </Link>
          <Link to={'/Breakdown'} ><h3>Breakdown</h3> </Link>
        </div>
        <div className="right-side">
          <h3  style={myStyle}>BALANCE: {balance}</h3>
        </div>
      </div>
      </div>
  );
}

export default Header;
