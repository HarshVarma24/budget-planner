import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function Chart({ expenses }) {
  // Step 1: Calculate category totals
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});
  
  const categoryColors = {
    "Food": "#ef4444",
      "Stationary": "#3b82f6",
      "Travel": "#10b981",
      "Shopping": "#ec4899",
      "Entertainment": "#8b5cf6",
      "Transfer": "#eab308",
      "Bills": "#f97316",
      "Other": "#6b7280"
    };

  // Step 2: Convert into chart data
  const chartData = Object.keys(categoryTotals).map((category) => ({
    category,
    amount: categoryTotals[category],
    fill: categoryColors[category],
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      {expenses.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;
