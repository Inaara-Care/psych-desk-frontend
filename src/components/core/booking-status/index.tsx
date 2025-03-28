import React from "react";
import "@fontsource/inter/500.css"; 

export type Status = "Booked" | "Cancelled" | "Recurring" | "Pending";

const statusStyles: Record<Status, string> = {
  Booked:    "text-[rgba(0,167,72,1)] border-[rgba(0,167,72,1)] bg-[rgba(231,255,241,1)]",
  Pending:   "text-[rgba(255,165,0,1)] border-[rgba(255,165,0,1)] bg-[rgba(255,249,237,1)]",
  Recurring: "text-[rgba(0,131,255,1)] border-[rgba(0,131,255,1)] bg-[rgba(244,250,255,1)]",
  Cancelled: "text-[rgba(244,0,4,1)] border-[rgba(244,0,4,1)] bg-[rgba(255,244,247,1)]",
};

interface BookingStatusProps {
  status: Status;
  height?: number; 
  width?: number;  
}

const BookingStatus: React.FC<BookingStatusProps> = ({
  status,
  height = 19,
  width = 72,
}) => {
  // Base design values
  const baseHeight = 19;
  const baseWidth = 72;
  const baseFontSize = 12;
  const basePaddingY = 2;
  const basePaddingX = 8;
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

export default BookingStatus;
