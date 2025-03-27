import React from 'react';

export const RevenueChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = [10000, 5500, 8000, 7000, 9000, 9500, 5000, 7500, 8500, 7000, 9000, 5000];
  const maxValue = Math.max(...values);

  return (
    <div className="w-full h-64">
      <div className="flex h-full items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div 
              className="w-8 bg-blue-600 opacity-80 rounded-t-md transition-all duration-300 hover:opacity-100"
              style={{ height: `${(values[index] / maxValue) * 100}%` }}
            />
            <span className="text-xs text-gray-500 mt-2">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};