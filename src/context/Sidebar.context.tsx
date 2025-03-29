// Sidebar.context.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

export type SidebarContextType = {
  activeTab: string;
  tabHeading: string;
  setActiveTab: (tab: string) => void;
};

const TAB_ALIAS: Record<string, string> = {
  '': 'Dashboard',
  'event-types': 'Event Types',
  clients: 'Clients',
  contacts: 'Contacts',
  resources: 'Resources',
  settings: 'Settings',
  invoices: 'Invoices',
  calendar: 'Calendar',
  bookings: 'Bookings',
};

const SidebarContext = createContext<SidebarContextType>({
  activeTab: '',
  tabHeading: '',
  setActiveTab: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  // Get the active segment from the URL
  const segment = useSelectedLayoutSegment();
  // Use that as the active tab state (if not defined, default to empty string)
  const [activeTab, setActiveTab] = useState(segment || '');

  useEffect(() => {
    setActiveTab(segment || '');
  }, [segment]);

  // Map the active tab to a title via TAB_ALIAS (default to "Dashboard")
  const tabHeading = TAB_ALIAS[activeTab] || 'Dashboard';

  return <SidebarContext.Provider value={{ activeTab, tabHeading, setActiveTab }}>{children}</SidebarContext.Provider>;
};

export default SidebarContext;
