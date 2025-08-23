import React, { useState } from 'react'
import { PiggyBank, Target } from 'lucide-react';

function Budget({setbudget}){
const[input, setInput] = useState("");

const handlesubmit = (e) =>{
    e.preventDefault();
    setbudget(Number(input));
    setInput("");
};

  return (
    <div className='card fade-in'>
      <div className='flex items-center gap-3 mb-4'>
        <div className="p-2 bg-purple-300 rounded-lg">
          <PiggyBank className='w-5 h-5 text-white'/>
        </div>
        <h2 className='text-xl font-bold text-gray-800'>Set Budget</h2>
      </div>
        
      <form onSubmit={handlesubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2 text-left'>Budget Amount</label>
          <div className='relative'>
            <span className='absolute left-3 top-3 text-gray-500'>₹</span>   
            <input type='number' placeholder='Enter the Budget' value={input} onChange={(e) => setInput(e.target.value)} min = "1" step = "0.01" className='input-field pl-6 py-2'/>
        </div>
      </div>
        <button type='submit' className='button-primary w-full'>
        Set Budget
        </button>
    </form>
    </div>
  );
}
export default Budget;
