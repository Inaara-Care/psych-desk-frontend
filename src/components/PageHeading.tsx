// PageHeading.tsx
'use client';

import { useSidebarContext } from '@/context/Sidebar.context';
import React from 'react';

export const PageHeading = () => {
  const { tabHeading } = useSidebarContext();
  return <h1 className="text-4xl font-bold mb-2">{tabHeading}</h1>;
};
