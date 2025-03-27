<<<<<<< HEAD
import React from 'react'
import  DemoInputPage from '../../Demo/DemoInputPage'
const page = () => {
  return (
    <div>
        <DemoInputPage/>
    </div>
  )
}
=======
import { StatsCard, RevenueChart, AnalyticsChart } from '@/components';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total session"
          value="24"
          trend={{ value: '00', label: 'in sessions of "depression"', isPositive: true }}
          icon="clipboard"
        />
        <StatsCard
          title="Appointments"
          value="56"
          trend={{ value: '00', label: 'in "new appointments"', isPositive: false }}
          icon="calendar"
        />
        <StatsCard
          title="Total income"
          value="240K"
          trend={{ value: '00', label: 'than last month', isPositive: false }}
          icon="rupee"
        />
        <StatsCard
          title="Current patients"
          value="12"
          trend={{ value: '00', label: 'than last month', isPositive: false }}
          icon="users"
        />
      </div>
>>>>>>> 39311a6e8717ec592ce4f2f1c5325f75f74709f5

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Revenue statistic</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-green-500">00% in sessions of "depression"</span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <RevenueChart />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default page;
