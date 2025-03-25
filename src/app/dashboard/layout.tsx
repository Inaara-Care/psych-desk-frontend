import { Navbar, Sidebar } from '@/components';
import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return  <div className="h-screen">
  {/* Sidebar */}
  <Navbar />


  <div className="flex">
    {/* Navbar */}
  <Sidebar />


    {/* Main Content */}
    <main className="">
      {children}
    </main>
  </div>
</div>;
};

export default DashboardLayout;
