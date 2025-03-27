'use client';
import { useSidebarContext } from '@/context/Sidebar.context';
import React from 'react';

export const PageHeading = () => {
  const { tabHeading } = useSidebarContext();
  return (
    <div className="gap-4 mb-6">
      <h1 className="text-2xl font-semibold mb-5">{tabHeading}</h1>
    </div>
  );
};
