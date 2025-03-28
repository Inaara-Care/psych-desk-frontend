// InputField component
"use client";
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path 
      d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z" 
      stroke="#E00004" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 6.66669V10" 
      stroke="#E00004" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M10 13.3334H10.0083" 
      stroke="#E00004" 
      strokeWidth="1.67" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ICON_MAP: Record<string, { default: string; disabled: string }> = {
  Name: { default: '/input_field/person.svg', disabled: '/input_field/person_disabled.svg' },
  Mail: { default: '/input_field/email.svg', disabled: '/input_field/email_disabled.svg' },
  Date: { default: '/input_field/event.svg', disabled: '/input_field/event_disabled.svg' },
  Time: { default: '/input_field/schedule.svg', disabled: '/input_field/schedule_disabled.svg' },
  Fees: { default: '/input_field/si_rupee-fill.svg', disabled: '/input_field/si_rupee-fill_disabled.svg' },
  Location: { default: '/input_field/location_on.svg', disabled: '/input_field/location_on_disabled.svg' },
  Search: { default: '/input_field/search.svg', disabled: '/input_field/search_disabled.svg' },
  Title: { default: '/input_field/title.svg', disabled: '/input_field/title_disabled.svg' },
  Invoice: { default: '/input_field/invoice.svg', disabled: '/input_field/invoice_disabled.svg' },
  Description: { default: '/input_field/description.svg', disabled: '/input_field/description_disabled.svg' },
  Phone: { default: '/input_field/phone.svg', disabled: '/input_field/phone_disabled.svg' },
};

const INPUT_TYPE_MAP: Record<string, string> = {
  Name: 'text',
  Mail: 'email',
  Time: 'time',
  Fees: 'number',
  Age: 'number',
  Location: 'text',
  Phone: 'tel',
  Date: 'date',
};

const STATE_CLASSES = {
  base: 'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] text-[12px] font-inter font-medium',
  placeholder: 'bg-white border border-[#E8E8E8]',
  filled: 'bg-white border border-[#E8E8E8]',
  focused: 'border border-[#8C95E1] shadow-[0px_0px_0px_4px_rgba(140,149,225,0.3)]',
  disabled: 'bg-[#F8F8F8] border border-[#E0E0E0] cursor-not-allowed',
  destructive: 'border border-[#FF0000]',
  destructiveFocused: 'shadow-[0px_0px_0px_4px_rgba(255,0,0,0.15)]',
};

interface InputFieldProps {
  type: keyof typeof INPUT_TYPE_MAP | 'Age' | 'Search' | 'Title' | 'Invoice' | 'Description';
  label?: string;
  hintText?: string;
  destructiveText?: string;
  destructive?: boolean;
  state?: 'placeholder' | 'filled' | 'focused' | 'disabled';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  lead?: boolean;
  className?: string;
  height?: string;
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPhoneChange?: (phone: string) => void;
  value?: string;
}

const InputField = ({
  type = 'Name',
  label,
  hintText,
  destructiveText,
  destructive = false,
  state = 'placeholder',
  leadingIcon,
  trailingIcon,
  lead = false,
  className,
  width = '410px',
  height = '45px',
  onChange,
  ...props
}: InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [internalValue, setInternalValue] = useState(props.value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const isDisabled = state === 'disabled';

  useEffect(() => {
    setInternalValue(props.value || '');
  }, [props.value]);

  const getLeadingIcon = () => {
    if (!lead || !ICON_MAP[type] || type === 'Age') return null;
    const iconSrc = isDisabled ? ICON_MAP[type].disabled : ICON_MAP[type].default;
    return <img src={iconSrc} alt="icon" className="w-5 h-5" />;
  };

  const renderedLeadingIcon = leadingIcon || getLeadingIcon();
  const hasTrailingIcon = !!trailingIcon || destructive;

  const inputClasses = clsx(
    STATE_CLASSES.base,
    state === 'disabled' ? STATE_CLASSES.disabled : STATE_CLASSES[state],
    {
      [STATE_CLASSES.destructive]: destructive && state !== 'focused',
      [STATE_CLASSES.destructiveFocused]: destructive && state === 'focused',
      'pl-[35px]': renderedLeadingIcon,
      'pr-10': hasTrailingIcon,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const renderCommonInput = (inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="space-y-1.5" style={{ width }}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative" style={{ height }}>
        {renderedLeadingIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {renderedLeadingIcon}
          </span>
        )}

        <input
          {...inputProps}
          ref={inputRef}
          className={clsx(inputClasses, className)}
          style={{ width: '100%', height: '100%' }}
          disabled={isDisabled}
          onChange={handleChange}
          value={internalValue}
        />

        {hasTrailingIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {destructive ? <ErrorIcon /> : trailingIcon}
          </span>
        )}
      </div>

      {hintText && !destructive && (
        <p className="text-[12px] text-[#2B2B2B]">{hintText}</p>
      )}
      {destructive && <p className="text-[12px] text-red-600">{destructiveText}</p>}
    </div>
  );

  switch (type) {
    case 'Phone':
      return (
        <div className="space-y-1.5" style={{ width }}>
          {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
          <div className="relative" style={{ height }}>
            <PhoneInput
              country="in"
              value={internalValue}
              onChange={(phone) => {
                setInternalValue(phone);
                onChange?.({ target: { value: phone } } as React.ChangeEvent<HTMLInputElement>);
              }}
              disabled={isDisabled}
              containerClass="w-full h-full"
              inputClass="!w-full !h-full !pl-10"
              buttonClass="!bg-transparent !border-none"
            />
            {renderedLeadingIcon && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                {renderedLeadingIcon}
              </span>
            )}
          </div>
        </div>
      );

    case 'Location':
      return (
        <div className="space-y-1.5" style={{ width }}>
          {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
          <div className="relative" style={{ height }}>
            {renderedLeadingIcon && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                {renderedLeadingIcon}
              </span>
            )}
            <textarea
              {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
              className={clsx(inputClasses, className)}
              style={{ width: '100%', height: '100%', resize: 'none' }}
              value={internalValue}
              onChange={handleChange}
              disabled={isDisabled}
            />
          </div>
        </div>
      );

    default:
      return renderCommonInput({
        type: INPUT_TYPE_MAP[type] || 'text',
        ...props,
      });
  }
};

export { InputField };