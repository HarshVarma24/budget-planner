import React from 'react'

function ExpenseList({expenses}){  
  return (
    <div className='list'>
        <h2>Expenses</h2>
        {expenses.length === 0 ? (
            <p>No expenses to display</p>
        ):(
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.name} - ₹{expense.amount} <span>({expense.category})</span>
                    </li>
                    ))}
            </ul>
        )}
        </div>
  )
}

export default ExpenseList;