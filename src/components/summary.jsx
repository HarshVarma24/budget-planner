import React from 'react'

function Summary({budget, totalExpenses, remaining, usedPercent}){
    let alertclass = "";
    if(usedPercent >= 100) alertclass = "alert-red";
    else if(usedPercent >= 60) alertclass= "alert-yellow";
    
  return (
   <div className={`Summary ${alertclass}`}>
      <p>Budget: ₹{budget}</p>
      <p>Spent: ₹{totalExpenses}</p>
      <p>Remaining: ₹{remaining}</p>
      <p>Used: {usedPercent}%</p>
   </div>
   
  );
}

export default Summary;
