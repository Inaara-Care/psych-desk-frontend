// InputDropdownMenuItem.tsx
import React from 'react';
import { DropdownSize, DropdownState, MenuItemType } from './types';

export interface InputDropdownMenuItemProps {
  size?: DropdownSize;
  state?: DropdownState;
  type?: MenuItemType;
  avatar?: React.ReactNode;
  icon?: React.ReactNode;
  check?: boolean;
  label?: string;
  subtext?: string;
  status?: string;
  destructive?: boolean;
  className?: string;
  onClick?: () => void;
}

const itemSizeClasses: Record<DropdownSize, string> = {
  default: 'px-4 py-3',
  half: 'px-3 py-2',
};

const stateClasses: Record<DropdownState, string> = {
  default: 'text-gray-900 hover:bg-gray-50',
  hover: 'bg-gray-50',
  focused: 'bg-purple-50 ring-1 ring-purple-200',
  disabled: 'text-gray-300 cursor-not-allowed',
  placeholder: 'text-gray-400',
  filled: 'bg-white',
  open:'bg-white'
};

const typeClasses: Record<MenuItemType, string> = {
  default: '',
  name: 'pl-12', // Extra padding for avatar
  mode: 'pl-10', // Padding for mode icon
  others: '',
  'input-field': 'bg-gray-50 border rounded-md',
  'leading-dropdown': 'pl-10',
  'trailing-dropdown': 'pr-10',
};

export const InputDropdownMenuItem: React.FC<InputDropdownMenuItemProps> = ({
  size = 'default',
  state = 'default',
  type = 'default',
  avatar,
  icon,
  check = false,
  label,
  subtext,
  status,
  destructive = false,
  className = '',
  onClick,
}) => {
  const handleClick = () => {
    if (state !== 'disabled' && onClick) onClick();
  };

  return (
    <div
      className={`relative flex items-center text-sm transition-colors ${
        itemSizeClasses[size]
      } ${stateClasses[state]} ${typeClasses[type]} ${
        destructive ? 'text-red-600 hover:bg-red-50' : ''
      } ${className}`}
      role="menuitem"
      onClick={handleClick}
    >
      {/* Avatar/Icon Section */}
      <div className="absolute left-3 flex items-center">
        {type === 'name' && avatar && (
          <div className="h-6 w-6 rounded-full overflow-hidden">
            {avatar}
          </div>
        )}
        {type === 'mode' && icon && (
          <div className="text-gray-400">{icon}</div>
        )}
      </div>

      {/* Checkmark */}
      {check && (
        <div className="mr-3 text-purple-600">
          <CheckIcon className="h-5 w-5" />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className={`truncate ${destructive ? 'text-red-600' : 'text-gray-900'}`}>
              {label}
            </p>
            {subtext && (
              <p className="mt-0.5 text-xs text-gray-500 truncate">
                {subtext}
              </p>
            )}
          </div>
          {status && (
            <span className="ml-2 text-xs text-green-600 shrink-0">
              {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);