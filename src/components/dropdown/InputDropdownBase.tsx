import React from 'react';
import { DropdownSize, DropdownState, DropdownType} from './types';

export interface InputDropdownBaseProps {
  size?: DropdownSize;
  state?: DropdownState;
  type?: DropdownType;
  label?: string;
  supportingText?: string;
  leadingIcon?: React.ReactNode;
  avatarLeading?: React.ReactNode;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const sizeClasses: Record<DropdownSize, string> = {
  default: 'w-full',
  half: 'w-1/2',
};

const containerStateClasses: Record<DropdownState, string> = {
  placeholder: 'border-gray-200',
  default: 'border-gray-200 hover:border-gray-300',
  open: 'border-2 border-purple-500 ring-1 ring-purple-500',
  disabled: 'border-gray-200 bg-gray-50 cursor-not-allowed',
  filled: 'border-gray-200 bg-white',
  hover: 'border-gray-300',
  focused: 'border-2 border-purple-500 ring-1 ring-purple-500',
};

const inputStateClasses: Record<DropdownState, string> = {
  placeholder: 'text-gray-400',
  default: 'text-gray-900',
  open: 'text-gray-900',
  disabled: 'text-gray-400',
  filled: 'text-gray-900',
  hover: 'text-gray-900',
  focused: 'text-gray-900',
};

const getTypeClasses = (type: DropdownType, state: DropdownState): string => {
  switch (type) {
    case 'destructive':
      return `border-red-500 text-red-600 placeholder-red-300 ${
        state === 'open' ? 'ring-red-200' : ''
      }`;
    case 'icon-leading':
      return 'pl-10';
    case 'avatar-leading':
      return 'pl-12';
    case 'search':
      return 'pl-10';
    default:
      return '';
  }
};

export const InputDropdownBase: React.FC<InputDropdownBaseProps> = ({
  size = 'default',
  state = 'default',
  type = 'default',
  label,
  supportingText,
  leadingIcon,
  avatarLeading,
  placeholder = 'Select an option',
  className = '',
  disabled = false,
  onClick,
  onFocus,
  onChange,
  value,
}) => {
  const isDisabled = disabled || state === 'disabled';

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className={`relative rounded-lg transition-all ${containerStateClasses[state]}`}>
        {type === 'avatar-leading' && avatarLeading && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full overflow-hidden">
            {avatarLeading}
          </div>
        )}

        {(type === 'icon-leading' || type === 'search') && leadingIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leadingIcon}
          </div>
        )}

        <input
          type="text"
          readOnly={type !== 'search'}
          disabled={isDisabled}
          onClick={onClick}
          onFocus={onFocus}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={`w-full rounded-lg py-2.5 pr-3 text-sm focus:outline-none placeholder:text-gray-400 ${
            inputStateClasses[state]
          } ${getTypeClasses(type, state)} ${
            isDisabled ? 'bg-gray-50' : 'bg-white'
          } ${
            type === 'search' ? 'pl-10' : 
            type === 'avatar-leading' ? 'pl-12' : 
            type === 'icon-leading' ? 'pl-10' : 'pl-3'
          }`}
        />

        {/* Dropdown indicator */}
        {type !== 'search' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}
      </div>

      {supportingText && (
        <p className="mt-2 text-sm text-gray-500">{supportingText}</p>
      )}
    </div>
  );
};