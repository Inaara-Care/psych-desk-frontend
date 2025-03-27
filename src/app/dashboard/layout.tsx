import { Navbar, Sidebar } from '@/components';
import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Overview</button>
              <button className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg font-medium">
                Session details
              </button>
            </div>
          </div>
          {children}
        </main>
      </div> 
    </div>
  );
};

export default DashboardLayout;
