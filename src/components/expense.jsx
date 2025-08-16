import React, { useState } from 'react'

function Expense({expenses, setExpenses}) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    
    const categories = ["Food", "Stationary", "Travel", "Shopping", "Entertainment", "Transfer", "Bills", "Other"];
    const handlesubmit = (e) =>{
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            name: name,
            amount:Number(amount),
            category: category
        };
        setName("");
        setAmount("");
        setCategory("");
        setExpenses([...expenses, newExpense]);
        
    }
    return (
        <form onSubmit={handlesubmit} className='form'>
            <h2>Add Expense</h2>
            <input type='text' placeholder='Expense name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='number' placeholder='Expense amount' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                    ))}
            </select>
            <button type='submit'>add</button>      
        </form>
    );
}

export default Expense;