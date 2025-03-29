// dashboard/layout.tsx (server component)
import { SidebarProvider } from '@/context/Sidebar.context';
import { ReactNode } from 'react';
import { Navbar, Sidebar } from '@/components';
import { PageHeading } from '@/components/PageHeading';
export default function DashboardLayout({
  children
}: {
  children: ReactNode;
  params: { tab?: string };
}) {


  return (
    <SidebarProvider>
      <div className="h-screen relative">
        <Navbar />
        <div className="flex gap-2">
          <Sidebar />
          <main className="flex-1 bg-white rounded-lg py-2 px-2">
            <PageHeading />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
