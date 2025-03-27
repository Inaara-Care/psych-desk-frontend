import { Navbar, Sidebar } from '@/components';
import { PageHeading } from '@/components/PageHeading';
import { SidebarProvider } from '@/context/Sidebar.context';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-screen relative">
        <Navbar />
        <div className="flex gap-2">
          <Sidebar />
          <main className="flex-1 bg-white rounded-lg py-2 px-4">
            <PageHeading />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
