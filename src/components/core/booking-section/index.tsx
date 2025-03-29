'use client';
import React from "react";
import "@fontsource/inter/500.css"; 

export type StatusSection = "Upcoming" | "Reschedule" | "Cancelled";


const baseStyles: Record<StatusSection, React.CSSProperties> = {
  Upcoming: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    gap: "16px",
    width: "309px",
    height: "40px",
    background: "rgba(244, 255, 247, 1)", 
    border: "1px solid rgba(0, 171, 48, 1)", 
    borderRadius: "4px",
    color: "rgba(0, 171, 48, 1)",
  },
  Reschedule: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    gap: "16px",
    width: "309px",
    height: "40px",
    background: "rgba(255,249,237,1)",
    border: "1px solid rgba(255,165,0,1)",
    borderRadius: "4px",
    color: "rgba(255,165,0,1)",
  },
  Cancelled: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    gap: "16px",
    width: "309px",
    height: "40px",
    background: "rgba(255,244,247,1)",
    border: "1px solid rgba(244,0,4,1)",
    borderRadius: "4px",
    color: "rgba(244,0,4,1)",
  },
};

interface BookingStatusProps {
  status: StatusSection;
  height?: number; 
  width?: number;  
  /** When true, the width is set to "100%" rather than the numeric value */
  fillWidth?: boolean;
}

const BookingSection: React.FC<BookingStatusProps> = ({
  status,
  height = 40,
  width = 309,
  fillWidth = false,
}) => {
  // Base design values
  const baseHeight = 40;
  const baseWidth = 309;
  const baseFontSize = 16;
  const basePaddingY = 2;
  const basePaddingX = 8;
  const baseBorderRadius = 4;

  // Ensure provided dimensions are not less than defaults
  const effectiveHeight = Math.max(height, baseHeight);
  const effectiveWidth = Math.max(width, baseWidth);

  // Calculate scaling factors
  const verticalScale = effectiveHeight / baseHeight;
  const horizontalScale = effectiveWidth / baseWidth;

  // Scale typography and spacing proportionally
  const fontSize = baseFontSize * verticalScale;
  const paddingY = basePaddingY * verticalScale;
  const paddingX = basePaddingX * horizontalScale;
  const borderRadius = baseBorderRadius * verticalScale;

  // Dynamic styling for typography and layout adjustments
  const dynamicStyle: React.CSSProperties = {
    width: fillWidth ? "100%" : `${effectiveWidth}px`,
    minWidth: `${effectiveWidth}px`,
    height: `${effectiveHeight}px`,
    minHeight: `${effectiveHeight}px`,
    borderWidth: "0.5px",
    padding: `${paddingY}px ${paddingX}px`,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: fontSize,
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    whiteSpace: "nowrap",
    borderRadius: borderRadius,
  };

  // Merge the base style for the selected status with the dynamic styles
  const combinedStyle = {
    ...baseStyles[status],
    ...dynamicStyle,
  };

  return (
    <span style={combinedStyle}>
      {status}
    </span>
  );
};

export default BookingSection;
