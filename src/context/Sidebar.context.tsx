'use client';

import { createContext, useContext, useState, ReactNode } from "react";

export type SidebarContextType = {
  activeTab: string;
  tabHeading: string;
  setActiveTab: (tab: string) => void;
};

const initialState: SidebarContextType = {
  activeTab: '/',
  tabHeading: 'Dashboard',
  setActiveTab: () => {}
};

const TAB_ALIAS: Record<string, string> = {
  '': 'Dashboard',
  'event-types': 'Event types',
  'clients': 'Clients',
  'contacts': 'Contacts',
  'resources': 'Resources',
  'settings': 'Settings',
  'invoices': 'Invoices',
  'calendar': 'Calendar',
  'bookings': 'Bookings'
}

const SidebarContext = createContext<SidebarContextType>(initialState);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  return (
    <SidebarContext.Provider value={{ tabHeading: TAB_ALIAS[activeTab], activeTab, setActiveTab }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
