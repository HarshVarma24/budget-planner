import React from 'react';
import { Receipt } from 'lucide-react';

function ExpenseList({ expenses }) {
  const getCategoryColor = (category) => {
    const colors = {
      "Food": "bg-red-100 text-red-800",
      "Stationary": "bg-blue-100 text-blue-800",
      "Travel": "bg-green-100 text-green-800",
      "Shopping": "bg-pink-100 text-pink-800",
      "Entertainment": "bg-purple-100 text-purple-800",
      "Transfer": "bg-yellow-100 text-yellow-800",
      "Bills": "bg-orange-100 text-orange-800",
      "Other": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="card fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Receipt className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Recent Expenses</h2>
      </div>
      
      {expenses.length === 0 ? (
        <div className="text-center py-8">
          <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No expenses yet</p>
          <p className="text-sm text-gray-400">Add your first expense to get started!</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{expense.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getCategoryColor(expense.category)}`}>
                  {expense.category}
                </span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg text-red-600">₹{expense.amount.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {expenses.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Total Expenses</span>
            <span className="font-semibold text-red-600">
              ₹{expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;