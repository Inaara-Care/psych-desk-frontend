import React from 'react';

export const AnalyticsChart = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Blue segment (120 degrees) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="20"
          strokeDasharray="251.2 377"
          transform="rotate(-90 50 50)"
        />
        {/* Light blue segment (90 degrees) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="20"
          strokeDasharray="188.4 377"
          strokeDashoffset="-251.2"
          transform="rotate(-90 50 50)"
        />
        {/* Orange segment (150 degrees) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="20"
          strokeDasharray="314 377"
          strokeDashoffset="-439.6"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span>Total paid</span>
          <span className="font-semibold">2K</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-blue-300"></span>
          <span>Total paid</span>
          <span className="font-semibold">2K</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
          <span>Total paid</span>
          <span className="font-semibold">2K</span>
        </div>
      </div>
    </div>
  );
};

