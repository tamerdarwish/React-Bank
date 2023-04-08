import './BreakdownPage.css'
const BreakdownPage = ({categoryBreakdownData}) => {
     


  return (
  <div>
    <h1>Breakdown</h1>
    {Object.keys(categoryBreakdownData).map(category => 
        <div className = 'category-card'>
            
            <label > <span className='category'> {category} :</span><span>{ categoryBreakdownData[category]}</span></label>
        </div>
        )}
  </div>
   
  );
}

export default BreakdownPage;
