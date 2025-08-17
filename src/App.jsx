import './App.css';
import ExpenseList from './components/ExpenseList';
import Expense from './components/expense';
import Budget from './components/budgetform';
import Summary from './components/summary';
import Chart from './components/chart';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const[budget, setBudget] = useState(0);
  const[expenses, setExpenses] = useState([]);
  const[user, setUser] = useState(null);
  
  let totalExpenses = 0;
  for(let expense of expenses){
    totalExpenses += expense.amount;
  } 
  const remaining = budget - totalExpenses;
  const usedPercent = budget > 0 ? (totalExpenses / budget) * 100 : 0;
  
  if(totalExpenses > budget){
    window.alert("⚠️ Budget exceeded!")
  }
  
  const handleLogin=(name, email)=>{
    setUser({name, email});
  }
  
  if(!user){
    return <Login onLogin={handleLogin}/>;
  }
  
  return (
     <div className="App min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome, {user.name}! 👋
      </h1>

      <Budget setbudget={setBudget} />
      <ExpenseList expenses={expenses} />
      <Summary
        remaining={remaining}
        totalExpenses={totalExpenses}
        budget={budget}
        usedPercent={usedPercent}
      />
      <Expense expenses={expenses} setExpenses={setExpenses} />
      <Chart expenses={expenses} />
    </div>
  );
}

export default App;
