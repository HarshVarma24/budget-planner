import React, { useState } from "react";
import { Plus } from "lucide-react";

function Expense({ expenses, setExpenses }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Food",
    "Stationary",
    "Travel",
    "Shopping",
    "Entertainment",
    "Transfer",
    "Bills",
    "Other",
  ];
  const handlesubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category,
    };
    setName("");
    setAmount("");
    setCategory("");
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div className="card fade in">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-100 rounded-lg">
          <Plus className="w-5 h-5 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Add Expense</h2>
      </div>

      <form onSubmit={handlesubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expense Name
          </label>
          <input
            type="text"
            className="input-field pl-6"
            placeholder="What did you spend on?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">₹</span>
            <input
              type="number"
              placeholder="Expense amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="input-field pl-7"
              min="0.01"
              step="0.01"
            ></input>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="button-primary w-full">
          Add
        </button>
      </form>
    </div>
  );
}

export default Expense;
