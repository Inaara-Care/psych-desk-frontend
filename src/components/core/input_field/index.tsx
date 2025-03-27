import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import ErrorIcon from '../icons/ErrorIcon';
import UserIcon from '../icons/UserIcon';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface InputButtonProps {
  type:
    | 'Name'
    | 'Mail'
    | 'Date'
    | 'Time'
    | 'Fees'
    | 'Age'
    | 'Location'
    | 'Search'
    | 'Title'
    | 'Invoice'
    | 'Description'
    | 'Phone';
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

function giveInputType(type: string): string {
  switch (type) {
    case 'Name':
      return 'text';
    case 'Mail':
      return 'text';
    case 'Time':
      return 'time';
    case 'Fees':
      return 'number';
    case 'Age':
      return 'number';
    case 'Location':
      return 'text'; // We handle "Location" in a separate branch (textarea)
    case 'Phone':
      return 'tel';
    default:
      return 'text';
  }
}

const InputButton = ({
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
}: InputButtonProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const isDisabled = state === 'disabled';

  // Internal states for different types
  const [internalPhone, setInternalPhone] = useState(props.value || '');
  const [internalDate, setInternalDate] = useState(props.value || '');
  const [internalTime, setInternalTime] = useState(props.value || '');
  const [internalLocation, setInternalLocation] = useState(props.value || '');

  useEffect(() => {
    const val = props.value || '';
    setInternalPhone(val);
    setInternalDate(val);
    setInternalTime(val);
    setInternalLocation(val);
  }, [props.value]);

  // Refs for date/time inputs
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const hasTrailingIcon = !!trailingIcon || destructive;

  // Icon conditions
  const showUserIcon = type === 'Name' && lead;
  const showMailIcon = type === 'Mail' && lead;
  const showDateIcon = type === 'Date' && lead;
  const showTimeIcon = type === 'Time' && lead;
  const showFeesIcon = type === 'Fees' && lead;
  const showAgeIcon = type === 'Age' && lead;
  const showLocationIcon = type === 'Location' && lead;
  const showSearchIcon = type === 'Search' && lead;
  const showTitleIcon = type === 'Title' && lead;
  const showInvoiceIcon = type === 'Invoice' && lead;
  const showDescriptionIcon = type === 'Description' && lead;
  const showPhoneIcon = type === 'Phone' && lead;

  // Leading icon logic
  if (showUserIcon && !isDisabled) {
    leadingIcon = <img src="/input_field/person.svg" alt="icon" className="w-5 h-5" />;
  } else if (showUserIcon && isDisabled) {
    leadingIcon = <img src="/input_field/person_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showMailIcon && !isDisabled) {
    leadingIcon = <img src="/input_field/email.svg" alt="icon" className="w-5 h-5" />;
  } else if (showMailIcon && isDisabled) {
    leadingIcon = <img src="/input_field/email_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showDateIcon && !isDisabled) {
    leadingIcon = <img src="/input_field/event.svg" alt="icon" className="w-5 h-5" />;
  } else if (showDateIcon && isDisabled) {
    leadingIcon = <img src="/input_field/event_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showTimeIcon && !isDisabled) {
    leadingIcon = <img src="/input_field/schedule.svg" alt="icon" className="w-5 h-5" />;
  } else if (showTimeIcon && isDisabled) {
    leadingIcon = <img src="/input_field/schedule_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showLocationIcon && !isDisabled) {
    leadingIcon = <img src="/input_field/location_on.svg" alt="icon" className="w-5 h-5" />;
  } else if (showLocationIcon && isDisabled) {
    leadingIcon = <img src="/input_field/location_on_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showSearchIcon &&!isDisabled) {
    leadingIcon = <img src="/input_field/search.svg" alt="icon" className="w-5 h-5" />;
  } else if (showSearchIcon && isDisabled) {
    leadingIcon = <img src="/input_field/search_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showTitleIcon &&!isDisabled) {
    leadingIcon = <img src="/input_field/title.svg" alt="icon" className="w-5 h-5" />;
  } else if (showTitleIcon && isDisabled) {
    leadingIcon = <img src="/input_field/title_disabled.svg" alt="icon" className="w-5 h-5" />;      
  } else if (showInvoiceIcon &&!isDisabled) {
    leadingIcon = <img src="/input_field/invoice.svg" alt="icon" className="w-5 h-5" />;
  } else if (showInvoiceIcon && isDisabled) {
    leadingIcon = <img src="/input_field/invoice_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if (showDescriptionIcon &&!isDisabled) {
    leadingIcon = <img src="/input_field/description.svg" alt="icon" className="w-5 h-5" />;
  } else if (showDescriptionIcon && isDisabled) {
    leadingIcon = <img src="/input_field/description.svg" alt="icon" className="w-5 h-5" />;
  } else if (showPhoneIcon &&!isDisabled) {
    leadingIcon = <WhatsAppIcon />;
  } else if (showPhoneIcon && isDisabled) {
    leadingIcon = <WhatsAppIcon />;
  } else if(showFeesIcon && !isDisabled){
    leadingIcon = <img src="/input_field/si_rupee-fill.svg" alt="icon" className="w-5 h-5" />;
  } else if(showFeesIcon && isDisabled){
    leadingIcon = <img src="/input_field/si_rupee-fill_disabled.svg" alt="icon" className="w-5 h-5" />;
  } else if(showAgeIcon && !isDisabled){
    trailingIcon = <img src="/input_field/Years.svg" alt="icon" className="w-5 h-5" />;
  } else if(showAgeIcon && isDisabled){
    const trailingIcon = (
        <div className="flex items-center space-x-1">
          <img src="/input_field/Years.svg" alt="icon" className="w-5 h-5" />
          <img src="/input_field/AnotherIcon.svg" alt="icon" className="w-5 h-5" />
        </div>
      );
  }
  // 

  // Compute input classes
  const inputClasses = clsx('transition-all focus:outline-none', {
    'pl-[35px]': leadingIcon && type !== 'Phone',
    'pr-10': trailingIcon,
    'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] bg-white border border-[#E8E8E8] text-[12px] font-inter font-medium':
      state === 'placeholder' || state === 'filled',
    'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] bg-white border border-[#8C95E1] shadow-[0px_0px_0px_4px_rgba(140,149,225,0.3)] text-[12px] font-inter font-medium':
      state === 'focused',
    'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] bg-[#F8F8F8] border border-[#E0E0E0] cursor-not-allowed text-[12px] font-inter font-medium':
      isDisabled,
    'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] bg-white border border-[#FF0000] text-[12px] font-inter font-medium':
      (state === 'placeholder' || state === 'filled') && destructive,
    'rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px] bg-white border border-[#FF0000] shadow-[0px_0px_0px_4px_rgba(255,0,0,0.15)] text-[12px] font-inter font-medium':
      state === 'focused' && destructive,
  });

  const containerClasses = clsx('space-y-1.5', className);
  const hintTextClasses = `w-[${width}] h-[15px] font-inter font-medium text-[12px] text-[rgba(43,43,43,1)]`;
  const destructiveTextClasses = `w-[${width}] h-[15px] font-inter font-medium text-[12px] text-red-600`;

  // --------------------------------
  // LOCATION BRANCH (Multiline using <textarea>)
 //----
 if (type === 'Location') {
    // Destructure only what we need; remove onPhoneChange if it exists
    const { height, width, ...textareaProps } = props;
    const textAreaRest = textareaProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  
    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
  
        <div style={{ width }} className="relative">
          {/* LEADING ICON */}
          {showLocationIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
              {leadingIcon}
            </span>
          )}
  
          {/* TEXTAREA */}
          <textarea
            // The actual text content
            value={internalLocation}
            // Disabled / readOnly logic
            disabled={isDisabled}
            // onChange
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setInternalLocation(e.target.value);
              onChange?.(e);
            }}
            // Placeholder text
            placeholder="Enter your Number"
            // Strict width & height from props
            style={{
              width,                      // Force the provided width
              height,                     // Force the provided height
              minHeight: height,          // Prevent shrinking
              maxHeight: height,          // Prevent expanding
              // Left padding for leading icon
              paddingLeft: showLocationIcon ? '40px' : '10px',
              // Right padding for trailing icons (error or custom)
              paddingRight: hasTrailingIcon ? '40px' : '10px',
              // Disables manual resizing
              resize: 'none',
              // If text overflows, show scrollbars
              overflow: 'auto',
              // Ensure wrapping & line breaks
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
            className={inputClasses}
            aria-invalid={destructive}
            aria-disabled={isDisabled}
            {...textAreaRest}
          />
  
          {/* TRAILING ICON (error or custom) */}
          {(trailingIcon || destructive) && (
            
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
              {destructive ? <ErrorIcon className="w-5 h-5 text-red-600" /> : trailingIcon}
            </span>
          )}
        </div>
  
        {/* HINT OR ERROR TEXT BELOW */}
        {hintText && !destructive && (
          <p className={hintTextClasses}>{hintText}</p>
        )}
        {destructive && (
          <p className={destructiveTextClasses}>{destructiveText}</p>
        )}
      </div>
    );
  }
  
  // --------------------------------
  // TIME BRANCH (Native HTML5 time input)
  // --------------------------------
  if (type === 'Time') {
    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">{label}</label>
        )}
        <div style={{ width }} className="relative">
          {(showTimeIcon || leadingIcon) && (
            <span className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[20px] h-[20px] pointer-events-none">
              {leadingIcon}
            </span>
          )}
          <input
            ref={timeInputRef}
            type="time"
            value={internalTime}
            disabled={isDisabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInternalTime(e.target.value);
              onChange && onChange(e);
            }}
            style={{
              width,
              height,
              paddingLeft: leadingIcon ? '40px' : '10px',
            }}
            className={inputClasses}
            aria-invalid={destructive}
            aria-disabled={isDisabled}
            {...props}
          />
          {(trailingIcon || destructive) && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              {destructive ? <ErrorIcon /> : trailingIcon}
            </span>
          )}
        </div>
        {hintText && !destructive && (
          <p className={hintTextClasses}>{hintText}</p>
        )}
        {destructive && (
          <p className={destructiveTextClasses}>{destructiveText}</p>
        )}
      </div>
    );
  }

  // --------------------------------
  // PHONE BRANCH
  // --------------------------------
  if (type === 'Phone') {
    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">{label}</label>
        )}
        <div style={{ width }} className="relative">
          {(showPhoneIcon || leadingIcon) && (
            <span className="absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[20px] h-[20px]">
              {leadingIcon}
            </span>
          )}
          <PhoneInput
            country="in"
            value={internalPhone}
            onChange={(phone) => {
              setInternalPhone(phone);
              onChange &&
                onChange({ target: { value: phone } } as React.ChangeEvent<HTMLInputElement>);
            }}
            disabled={isDisabled}
            containerStyle={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'center',
              border: 'none',
              background: 'transparent',
              width: '100%',
              height,
            }}
            buttonStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '55px',
              height: '100%',
              border: 'none',
              background: 'transparent',
              margin: 0,
              padding: 0,
            }}
            inputStyle={{
              flex: 1,
              height: '100%',
              paddingLeft: leadingIcon ? '40px' : '10px',
              paddingRight: '10px',
              fontSize: '12px',
              fontWeight: 500,
              borderRadius: '4px',
              border: isDisabled ? '1px solid #E0E0E0' : '1px solid #E8E8E8',
              backgroundColor: isDisabled ? '#F8F8F8' : '#FFFFFF',
              color: '#2B2B2B',
              outline: 'none',
              transition: 'all 0.2s ease-in-out',
              boxShadow: state === 'focused' ? '0px 0px 0px 4px rgba(140,149,225,0.3)' : 'none',
            }}
            dropdownStyle={{
              border: '1px solid #E8E8E8',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
            }}
          />
        </div>
        {hintText && !destructive && (
          <p className={hintTextClasses}>{hintText}</p>
        )}
        {destructive && (
          <p className={destructiveTextClasses}>{destructiveText}</p>
        )}
      </div>
    );
  }

  // --------------------------------
  // ALL OTHER TYPES
  // --------------------------------
  return (
    <div className={containerClasses}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div style={{ width }} className="relative">
        {leadingIcon && (
          <span className="absolute left-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center w-[20px] h-[20px]">
            {leadingIcon}
          </span>
        )}
        <input
          type={giveInputType(type)}
          style={{ width, height }}
          className={inputClasses}
          disabled={isDisabled}
          aria-invalid={destructive}
          aria-disabled={isDisabled}
          onChange={(e) => onChange && onChange(e)}
          {...props}
        />
        {(trailingIcon || destructive) && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {destructive ? <ErrorIcon /> : trailingIcon}
          </span>
        )}
      </div>
      {hintText && !destructive && (
        <p className={hintTextClasses}>{hintText}</p>
      )}
      {destructive && (
        <p className={destructiveTextClasses}>{destructiveText}</p>
      )}
    </div>
  );
};

export { InputButton };
