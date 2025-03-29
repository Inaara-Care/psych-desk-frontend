'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const RevenueChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = [10000, 5800, 8000, 6800, 9200, 9500, 5000, 7800, 8500, 6800, 9000, 5200];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#333',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: {parsed: {y: number}}) {
            return `$${context.parsed.y.toLocaleString()}`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f3f4f6',
        },
        border: {
          display: false,
        },
        ticks: {
          callback: function(this: import('chart.js').Scale, tickValue: string | number) {
            const value = Number(tickValue);
            if (value === 0) return '0';
            if (value === 2000) return '2K';
            if (value === 4000) return '4K';
            if (value === 6000) return '6K';
            if (value === 8000) return '8K';
            if (value === 10000) return '10K';
            return '';
          },
          color: '#9ca3af',
          font: {
            size: 12,
          },
          padding: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#9ca3af',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        data: values,
        backgroundColor: months.map((_, index) => index % 2 === 0 ? '#4f46e5' : '#c7d2fe'),
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 24,
        maxBarThickness: 24,
      },
    ],
  };

  return (
    <div className="w-full h-64">
      <Bar options={options} data={data} height={256} />
    </div>
  );
};