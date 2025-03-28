import React from "react";
import "@fontsource/inter/500.css"; 

export type Status = "Psychologist" | "Psychiatrist" | "Counsellor" | "Therapist" | "Psychoanalyst" | "Life coach" | "Other" ;

const statusStyles: Record<Status, string> = {
    Psychologist:    "text-[rgba(167, 0, 153, 1)] border-[rgba(167, 0, 153, 1)] bg-[rgba(255, 229, 253, 1)]",
    Psychiatrist:   "text-[rgba(167, 128, 0, 1)] border-[rgba(167, 128, 0, 1)] bg-[rgba(255, 250, 232, 1)]",
    Counsellor: "text-[rgba(0, 167, 72, 1)] border-[rgba(0, 167, 72, 1)] bg-[rgba(231, 255, 241, 1)]",
    Therapist: "text-[rgba(0, 136, 167, 1)] border-[rgba(0, 136, 167, 1)] bg-[rgba(233, 251, 255, 1)]",
    Psychoanalyst: "text-[rgba(0, 36, 167, 1)] border-[rgba(0, 36, 167, 1)] bg-[rgba(230, 235, 255, 1)]",
    "Life coach": "text-[rgba(81, 0, 167, 1)] border-[rgba(81, 0, 167, 1)] bg-[rgba(241, 227, 255, 1)]",
    Other: "text-[rgba(145, 68, 0, 1)] border-[rgba(145, 68, 0, 1)] bg-[rgba(255, 239, 225, 1)]",
};

interface ProfessionProps {
  status: Status;
  height?: number; 
  width?: number;  
}

const Profession: React.FC<ProfessionProps> = ({
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

export default Profession;
