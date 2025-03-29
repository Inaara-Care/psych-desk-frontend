import React from "react";
import "@fontsource/inter/500.css"; 

export type Status = "Paid" | "Cancelled" | "Unpaid" ;

const statusStyles: Record<Status, string> = {
  Paid:    "text-[rgba(0,167,72,1)] border-[rgba(0,167,72,1)] bg-[rgba(231,255,241,1)]",
  Unpaid:   "text-[rgba(255,165,0,1)] border-[rgba(255,165,0,1)] bg-[rgba(255,249,237,1)]",
  Cancelled: "text-[rgba(244,0,4,1)] border-[rgba(244,0,4,1)] bg-[rgba(255,244,247,1)]",
};

interface PaymentStatusProps {
  status: Status;
  height?: number; 
  width?: number;  
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({
  status,
  height = 23,
  width = 77,
}) => {
  // Base design values
  const baseHeight = 23;
  const baseWidth = 77;
  const baseFontSize = 14;
  const basePaddingY = 4;
  const basePaddingX = 16;
  const baseBorderRadius = 4;

  // Safeguard: ensure provided dimensions are not less than defaults
  const effectiveHeight = Math.max(height, baseHeight);
  const effectiveWidth = Math.max(width, baseWidth);

  // Calculate scaling factors (vertical scaling and horizontal scaling)
  const verticalScale = effectiveHeight / baseHeight;
  const horizontalScale = effectiveWidth / baseWidth;

  // Scale typography and spacing proportionally
  const fontSize = baseFontSize * verticalScale;
  const paddingY = basePaddingY * verticalScale;
  const paddingX = basePaddingX * horizontalScale;
  const borderRadius = baseBorderRadius * verticalScale;

  return (
    <span
      className={`inline-flex items-center justify-center border border-opacity-50 font-medium ${statusStyles[status]}`}
      style={{
        width: `${effectiveWidth}px`,
        height: `${effectiveHeight}px`,
        borderWidth: "0.5px",
        padding: `${paddingY}px ${paddingX}px`,
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: `${fontSize}px`,
        lineHeight: "100%",
        letterSpacing: "0px",
        textAlign: "center",
        whiteSpace: "nowrap",
        borderRadius: `${borderRadius}px`,
      }}
    >
      {status}
    </span>
  );
};

export default PaymentStatus;
