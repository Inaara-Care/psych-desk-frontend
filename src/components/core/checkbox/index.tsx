'use client';
import React from 'react';
import clsx from 'clsx';
import { MdOutlineCheck } from 'react-icons/md';

interface CheckboxProps {
  label?: string | React.ReactNode;
  value?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'radio' | 'filled';
}

const variantStyles = {
  default: 'rounded-sm border-foreground',
  radio: 'rounded-full',
  filled: 'rounded-lg text-white border-transparent',
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, value, variant = 'default' }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} value={value} className="hidden" />
      <div
        className={clsx('w-4 h-4 flex items-center justify-center border-1 transition-all', variantStyles[variant], {
          'bg-transparent': !checked,
        })}
      >
        {checked && <MdOutlineCheck className="text-2xl" />}
      </div>
    </label>
  );
};
