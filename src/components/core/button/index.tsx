interface IButton {
  label: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant: 'primary' | 'secondary' | 'outline' | 'link';
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const sizeUtil: Record<string, string> = {
  sm: 'rounded-lg px-4 py-2 text-sm',
};

const variantUtil: Record<string, string> = {
  primary: 'bg-primary text-white',
};

export const Button: React.FC<IButton> = ({
  label,
  size = 'md',
  variant = 'primary',
  disabled = false,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <button disabled={disabled} className={`font-semibold hover:cursor-pointer ${sizeUtil[size]} ${variantUtil[variant]}`}>
      {prefixIcon && <span>{prefixIcon}</span>}
      <span>{label}</span>
      {suffixIcon && <span>{suffixIcon}</span>}
    </button>
  );
};
