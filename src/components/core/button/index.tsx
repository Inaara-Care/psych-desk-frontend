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

const sizeUtil: Record<IButton["size"], string> = {
    sm: "rounded-lg px-4 py-2 text-sm",
    md: "rounded-lg px-5 py-3 text-base",
    lg: "rounded-lg px-6 py-3 text-lg",
    xl: "rounded-lg px-7 py-4 text-xl",
    "2xl": "rounded-lg px-8 py-5 text-2xl",
};

const variantUtil: Record<IButton["variant"], string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
    link: "text-blue-500 underline hover:text-blue-600",
};

const Button = ({
    label,
    size = "md",
    variant = "primary",
    disabled = false,
    prefixIcon,
    suffixIcon,
    onClick,
    className = "",
}: IButton) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`font-semibold hover:cursor-pointer ${sizeUtil[size]} ${variantUtil[variant]} ${className}`}
        >
            {prefixIcon && <span>{prefixIcon}</span>}
            <span>{label}</span>
            {suffixIcon && <span>{suffixIcon}</span>}
        </button>
    );
};

export default Button;
