import React from 'react';
import { MenuItemType } from './types';

export interface InputDropdownMenuProps {
  scrollable?: boolean;
  itemType?: MenuItemType;
  className?: string;
  children?: React.ReactNode;
}

export const InputDropdownMenu: React.FC<InputDropdownMenuProps> = ({
  scrollable = false,
  itemType = 'default',
  className = '',
  children,
}) => {
  // Example: If you want to style the entire menu differently for certain itemType
  // (e.g. 'leading-dropdown'), you could do something like:
  // const menuTypeClass = itemType === 'leading-dropdown' ? 'pl-2' : '';
  // Then add it to your container class.

  return (
    <div
      className={`
        absolute 
        z-10 
        mt-1 
        w-full 
        rounded-md 
        bg-white 
        shadow-lg
        ${scrollable ? 'max-h-56 overflow-y-auto' : ''}
        ${className}
      `}
    >
      <div className="py-1" role="menu">
        {children}
      </div>
    </div>
  );
};
