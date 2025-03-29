'use client';

import Button  from '@/components/core/button';
import Link from 'next/link';
import React, { useState } from 'react';

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  const [buttonGroup, setButtonGroup] = useState([
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
  ]);

  const handleButtonClick = (index: number) => {
    setButtonGroup((prev) => prev.map((btn, i) => ({ ...btn, isActive: i === index })));
  };

  return (
    <div>
      <div className="flex gap-2 mb-5">
        {buttonGroup.map((btn, index) => (
          <Link key={index} href={btn.route} onClick={() => handleButtonClick(index)}>
            <Button
              size="sm"
              label={btn.label}
              variant="outline"
              customClasses={`border-primary hover:bg-primary hover:text-white ${btn.isActive ? 'text-white bg-primary' : ''}`}
            />
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default OverviewLayout;
