import { Button, Navbar, Sidebar } from '@/components';
import Link from 'next/link';
import { ReactNode } from 'react';

const buttonGroup = [
  {
    label: 'Overview',
    isActive: true,
    route: '/dashboard/',
  },
  {
    label: 'Session Details',
    isActive: false,
    route: '/dashboard/session-details',
  },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <div className="flex gap-2">
        <Sidebar />
        <main className="flex-1 bg-white rounded-lg py-2 px-4">
          <div className="gap-4 mb-6">
            <h1 className="text-2xl font-semibold mb-5">Dashboard</h1>
          </div>
          <div className="flex gap-2 mb-5">
            {buttonGroup.map((btn, index) => (
              <Link key={index} href={btn.route}>
                <Button
                  key={index}
                  size="sm"
                  label={btn.label}
                  variant="outline"
                  customClasses={`border-primary hover:bg-primary hover:text-white ${btn.isActive && 'text-white bg-primary'}`}
                />
              </Link>
            ))}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
