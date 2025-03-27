import { Button } from '@/components';
import Link from 'next/link';
import React from 'react';

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

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
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
    </div>
  );
};

export default OverviewLayout;
