import React, { useState } from 'react';
import { LogIn, User, Mail, Wallet } from 'lucide-react';

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onLogin(name, email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="flex flex-col items-center text-center mb-8 slide-in">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl mb-6 shadow-2xl">
            <Wallet className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
            Budget Planner
          </h1>
          <p className="text-white/60 text-lg">
            Track your expenses with ease
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-1g border border-white/20 rounded-3xl p-8 shadow-2xl slide-in mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-white justify-center text-center">Welcome</h2>
          </div>
          <form onSubmit={handlesubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-white/60" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field1 pl-12 py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field1 pl-12 py-2"
                  required
                />
              </div>
            </div>

            <button type="submit" className="button-primary mt-8">
              <div className="flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Log In
              </div>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              Start managing your finances today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;