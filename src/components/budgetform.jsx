import React, { useState } from 'react'

function Budget({setbudget}){
const[input, setInput] = useState("");

const handlesubmit = (e) =>{
    e.preventDefault();
    setbudget(input);
    setInput("");
};

  return (
    <form onSubmit={handlesubmit} className='form'>
        <h2>Set Budget</h2>
        <input type='number' placeholder='Enter the Budget' value={input} onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
    </form>
  );
}
export default Budget;
