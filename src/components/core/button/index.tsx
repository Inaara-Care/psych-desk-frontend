import { link } from "fs";

interface IButton {
  label: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  variant: 'primary' | 'secondary' | 'outline' | 'link';
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
  customClasses?: string;
}

const sizeUtil: Record<string, string> = {
  sm: 'rounded-lg px-4 py-2 text-sm',
  full: 'w-full px-4 py-2'
};

const variantUtil: Record<string, string> = {
  primary: 'bg-primary text-white',
  outline: 'border-1 border-gray-400',
  link: 'text-primary',
};

export const Button: React.FC<IButton> = ({
  label,
  size = 'md',
  variant = 'primary',
  disabled = false,
  prefixIcon,
  suffixIcon,
  customClasses,
}) => {
  return (
    <button
      disabled={disabled}
      className={`font-semibold hover:cursor-pointer ${sizeUtil[size]} ${variantUtil[variant]} ${customClasses}`}
    >
      {prefixIcon && <span>{prefixIcon}</span>}
      <span>{label}</span>
      {suffixIcon && <span>{suffixIcon}</span>}
    </button>
  );
};
