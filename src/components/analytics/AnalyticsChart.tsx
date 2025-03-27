'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export const AnalyticsChart = () => {
  // Data for the donut chart
  const data = {
    labels: ['Total paid', 'Total paid', 'Total paid'],
    datasets: [
      {
        data: [35, 25, 40], // Percentages for each segment
        backgroundColor: ['#1e40af', '#60a5fa', '#f59e0b'],
        borderWidth: 0,
        cutout: '70%',
        borderRadius: 5,
      },
    ],
  };

  // Options for the donut chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true
    },
  };

  return (
    <div className="flex flex-col h-64">
      <div className="relative w-48 h-48 mx-auto">
        <Doughnut data={data} options={options} />
      </div>
      
      {/* Legend items below the chart */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <div className="flex items-center gap-2 text-sm truncate max-w-full">
          <span className="w-3 h-3 rounded-full bg-blue-800 flex-shrink-0"></span>
          <span className="text-gray-600 truncate">Total paid</span>
          <span className="font-semibold ml-1 flex-shrink-0">2K</span>
        </div>
        <div className="flex items-center gap-2 text-sm truncate max-w-full">
          <span className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0"></span>
          <span className="text-gray-600 truncate">Total paid</span>
          <span className="font-semibold ml-1 flex-shrink-0">2K</span>
        </div>
        <div className="flex items-center gap-2 text-sm truncate max-w-full">
          <span className="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0"></span>
          <span className="text-gray-600 truncate">Total paid</span>
          <span className="font-semibold ml-1 flex-shrink-0">2K</span>
        </div>
      </div>
    </div>
  );
};

