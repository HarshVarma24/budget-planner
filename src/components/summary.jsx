import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

function Summary({ budget, totalExpenses, remaining, usedPercent }) {
  const getStatusColor = () => {
    if (usedPercent >= 100) return 'text-red-600';
    if (usedPercent >= 80) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getProgressColor = () => {
    if (usedPercent >= 100) return 'bg-red-500';
    if (usedPercent >= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="card fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <TrendingUp className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Budget Summary</h2>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Budget Usage</span>
          <span className={`text-sm font-semibold ${getStatusColor()}`}>
            {Math.min(usedPercent, 100).toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 ${getProgressColor()} rounded-full transition-all duration-500`}
            style={{ width: `${Math.min(usedPercent, 100)}%` }}
          ></div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-1" />
          <p className="text-sm text-gray-600">Budget</p>
          <p className="text-lg font-semibold text-gray-800">₹{budget.toFixed(2)}</p>
        </div>
        
        <div className="text-center p-3 bg-red-50 rounded-lg">
          <TrendingDown className="w-5 h-5 text-red-600 mx-auto mb-1" />
          <p className="text-sm text-gray-600">Spent</p>
          <p className="text-lg font-semibold text-red-600">₹{totalExpenses.toFixed(2)}</p>
        </div>
        
        <div className="text-center p-3 bg-green-50 rounded-lg col-span-2">
          {remaining >= 0 ? (
            <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-red-600 mx-auto mb-1" />
          )}
          <p className="text-sm text-gray-600">
            {remaining >= 0 ? 'Remaining' : 'Over Budget'}
          </p>
          <p className={`text-xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{Math.abs(remaining).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Summary;