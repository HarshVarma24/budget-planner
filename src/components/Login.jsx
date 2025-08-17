import React, { useState } from 'react'

function Login({onLogin}) {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    
    const handlesubmit=(e) =>{
        e.preventDefault();
        onLogin(name,email);
        
    }
  return (
    <div className='flex items-center justify-center min-h-screen w-full bg-[#291b3b]  flex-col'>
    <div className='bg-[#553f6f] p-8 rounded-2xl shadow-lg w-full max-w-md'>
    <h2 className='text-3xl font-bold text-center text-white mb-6'>Login</h2>
    <form className='space-y-4'onSubmit={handlesubmit}>
        <div>
            <label className='block text-sm font-bold  text-[#FFFFFF] mb-2' htmlFor="name">Name</label>
            <input className='w-full px-4 py-2 rounded-lg bg-[#A9A9A9] text-white placeholder-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-purple-600'type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
            <label className='block text-sm font-bold text-[#FFFFFF] mb-2'>Email</label>
            <input className="w-full px-4 py-2 rounded-lg bg-[#A9A9A9] text-white placeholder-[#4A4A4A] focus:outline-none focus:ring-2" type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        </div>
        <button type='submit' className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-bold'>Login</button>    
        </form>
    </div>
    </div>
  );
}

export default Login