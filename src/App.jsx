import ExpenseList from "./components/ExpenseList";
import Expense from "./components/expense";
import Budget from "./components/budgetform";
import Summary from "./components/summary";
import Chart from "./components/chart";
import Login from "./components/Login";
import { useState } from "react";
import { Wallet, LogOut } from "lucide-react";

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  let totalExpenses = 0;
  for (let expense of expenses) {
    totalExpenses += expense.amount;
  }
  const remaining = budget - totalExpenses;
  const usedPercent = budget > 0 ? (totalExpenses / budget) * 100 : 0;

  if (totalExpenses > budget) {
    window.alert("⚠️ Budget exceeded!");
  }

  const handleLogin = (name, email) => {
    setUser({ name, email });
  };

  const handleLogout = () =>{
    setUser(null);
  };
  
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Expense Tracker
                </h1>
                <p className="text-gray-600">Welcome, {user.name}!👋</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-transparent text-gray-600 hover:text-purple-600 transition-colors "
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
        {/* {main content} */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
          <Budget setbudget={setBudget} />
          <ExpenseList expenses={expenses} />
          <Summary
            remaining={remaining}
            totalExpenses={totalExpenses}
            budget={budget}
            usedPercent={usedPercent}
          />
        </div>
        <div className="space-y-6">
          <Expense expenses={expenses} setExpenses={setExpenses} />
          <Chart expenses={expenses} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
