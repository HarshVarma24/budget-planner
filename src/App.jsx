import './App.css';
import ExpenseList from './components/ExpenseList';
import Expense from './components/expense';
import Budget from './components/budgetform';
import Summary from './components/summary';
import Chart from './components/chart';
import { useState } from 'react';

function App() {
  const[budget, setBudget] = useState(0);
  const[expenses, setExpenses] = useState([]);
  
  let totalExpenses = 0;
  for(let expense of expenses){
    totalExpenses += expense.amount;
  } 
  const remaining = budget - totalExpenses;
  const usedPercent = budget > 0 ? (totalExpenses / budget) * 100 : 0;
  
  if(totalExpenses > budget){
    window.alert("⚠️ Budget exceeded!")
  }
  
  return (
    <div className="App">
      <h1>Budget Planner</h1>
        <Budget setbudget={setBudget}/>
        <ExpenseList expenses={expenses}/>
        <Summary remaining={remaining} totalExpenses={totalExpenses} budget={budget} usedPercent={usedPercent}/>
        <Expense expenses={expenses} setExpenses={setExpenses}/>
        <Chart expenses={expenses}/>
    </div>
  );
}

export default App;
