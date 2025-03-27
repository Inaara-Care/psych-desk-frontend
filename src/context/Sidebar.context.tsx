'use client';

import { createContext, useContext, useState, ReactNode } from "react";

type SidebarContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const initialState: SidebarContextType = {
  activeTab: 'dashboard',
  setActiveTab: () => {}
};

const SidebarContext = createContext<SidebarContextType>(initialState);

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  return (
    <SidebarContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
