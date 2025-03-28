
import React from "react";
import clsx from "clsx";

interface InputTextProps {
    label?: string;
    hintText?: string;
    destructiveText?: string;
    destructive?: boolean;
    state?: "placeholder" | "filled" | "focused" | "disabled";
    className?: string;
    width?: string;
    height?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
}

const InputTextArea = ({
    label,
    hintText,
    destructiveText,
    destructive = false,
    state = "placeholder",
    className,
    width = "410px",
    height = "110px",
    onChange,
    value = "",
    ...props
}: InputTextProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const isDisabled = state === "disabled";

    const textareaClasses = clsx(
        "transition-all focus:outline-none resize-none", // Added "resize-none"
        {
            "rounded-[4px] p-[8px] bg-white border border-[#E8E8E8] text-[12px] font-medium":
                state === "placeholder" || state === "filled",
            "rounded-[4px] p-[8px] bg-white border border-[#8C95E1] shadow-[0px_0px_0px_4px_rgba(140,149,225,0.3)] text-[12px] font-medium":
                state === "focused",
            "rounded-[4px] p-[8px] bg-[#F8F8F8] border border-[#E0E0E0] cursor-not-allowed text-[12px] font-medium":
                isDisabled,
            "rounded-[4px] p-[8px] bg-white border border-[#FF0000] text-[12px] font-medium":
                (state === "placeholder" || state === "filled") && destructive,
            "rounded-[4px] p-[8px] bg-white border border-[#FF0000] shadow-[0px_0px_0px_4px_rgba(255,0,0,0.15)] text-[12px] font-medium":
                state === "focused" && destructive,
        }
    );

    return (
        <div className={clsx("space-y-1.5", className)} style={{ width }}>
            {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
            <textarea
                value={value}
                disabled={isDisabled}
                onChange={onChange}
                style={{ width, height, resize: "none" }} // Ensures no resizing
                className={textareaClasses}
                aria-invalid={destructive}
                aria-disabled={isDisabled}
                {...props}
            />
            {hintText && !destructive && (
                <p className="text-[12px] font-medium text-gray-700">{hintText}</p>
            )}
            {destructive && (
                <p className="text-[12px] font-medium text-red-600">{destructiveText}</p>
            )}
        </div>
    );
};

export default InputTextArea;
