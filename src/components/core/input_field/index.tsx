import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ErrorIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
interface InputFieldProps {
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
    } else if (showSearchIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/search.svg" alt="icon" className="w-5 h-5" />;
    } else if (showSearchIcon && isDisabled) {
        leadingIcon = <img src="/input_field/search_disabled.svg" alt="icon" className="w-5 h-5" />;
    } else if (showTitleIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/title.svg" alt="icon" className="w-5 h-5" />;
    } else if (showTitleIcon && isDisabled) {
        leadingIcon = <img src="/input_field/title_disabled.svg" alt="icon" className="w-5 h-5" />;
    } else if (showInvoiceIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/invoice.svg" alt="icon" className="w-5 h-5" />;
    } else if (showInvoiceIcon && isDisabled) {
        leadingIcon = <img src="/input_field/invoice_disabled.svg" alt="icon" className="w-5 h-5" />;
    } else if (showDescriptionIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/description.svg" alt="icon" className="w-5 h-5" />;
    } else if (showDescriptionIcon && isDisabled) {
        leadingIcon = <img src="/input_field/description.svg" alt="icon" className="w-5 h-5" />;
    } else if (showPhoneIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/phone.svg" alt="icon" className="w-5 h-5" />;
    } else if (showPhoneIcon && isDisabled) {
        leadingIcon = <img src="/input_field/phone_disabled.svg" alt="icon" className="w-5 h-5" />;
    } else if (showFeesIcon && !isDisabled) {
        leadingIcon = <img src="/input_field/si_rupee-fill.svg" alt="icon" className="w-5 h-5" />;
    } else if (showFeesIcon && isDisabled) {
        leadingIcon = <img src="/input_field/si_rupee-fill_disabled.svg" alt="icon" className="w-5 h-5" />;
    } else if (showAgeIcon && !isDisabled) {
        trailingIcon = <img src="/input_field/Years.svg" alt="icon" className="w-5 h-5" />;
    } else if (showAgeIcon && isDisabled) {
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
        return (
            <div className="space-y-1.5" style={{ width }}>
                {label && (
                    <label className="block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <div className="relative" style={{ width, height }}>
                    {/* Leading Icon */}
                    {showLocationIcon && leadingIcon && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                            {leadingIcon}
                        </span>
                    )}

                    {/* Fixed-size Textarea */}
                    <textarea
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                        value={internalLocation}
                        disabled={isDisabled}
                        onChange={(e) => {
                            setInternalLocation(e.target.value);
                            onChange?.(e);
                        }}
                        placeholder="Enter your location"
                        style={{
                            width: '100%',
                            height: '100%',
                            paddingLeft: leadingIcon ? '40px' : '10px',
                            paddingRight: hasTrailingIcon ? '40px' : '10px',
                            resize: 'none',
                            overflow: 'hidden',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                        }}
                        className={inputClasses}
                        aria-invalid={destructive}
                        aria-disabled={isDisabled}
                    />


                    {/* Trailing Icon */}
                    {(trailingIcon || destructive) && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                            {destructive ? <ErrorIcon /> : trailingIcon}
                        </span>
                    )}

                </div>

                {/* Hint Text */}
                {hintText && !destructive && (
                    <p className="text-[12px] font-inter text-[rgba(43,43,43,1)]">{hintText}</p>
                )}
                {destructive && (
                    <p className="text-[12px] font-inter text-red-600">{destructiveText}</p>
                )}
            </div>
        );
    }

    // --------------------------------
    // DATE BRANCH (Native HTML5 date input)
    // --------------------------------
    if (type === 'Date') {
        return (
            <div className={containerClasses}>
                {label && (
                    <label className="block text-sm font-medium text-gray-700">{label}</label>
                )}
                <div style={{ width }} className="relative">
                    {(showDateIcon || leadingIcon) && (
                        <span className="absolute left-[10px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-[20px] h-[20px] pointer-events-none">
                            {leadingIcon}
                        </span>
                    )}
                    <input
                        ref={dateInputRef}
                        type="date"
                        value={internalDate}
                        disabled={isDisabled}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setInternalDate(e.target.value);
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

export { InputField };
