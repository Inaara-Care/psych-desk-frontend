'use client';
import React from "react";
import { MdOutlineEdit } from "react-icons/md";

interface EditButtonProps {
  /** Optional click handler */
  onClick?: () => void;
  /** Optional custom width (min 26) */
  width?: number;
  /** Optional custom height (min 26) */
  height?: number;
}

const EditButton: React.FC<EditButtonProps> = ({
  onClick,
  width = 26,
  height = 26,
}) => {
  // Enforce minimum size of 26×26
  const finalWidth = Math.max(26, width);
  const finalHeight = Math.max(26, height);

  // Use const instead of let since 'classes' is never reassigned
  const classes = `
    inline-flex items-center justify-center
    rounded-[8px]
    text-gray-700
    hover:cursor-pointer
    transition-colors
    border-0
    bg-white hover:bg-[rgba(204,204,204,1)]
  `;

  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label="Edit"
      style={{
        width: `${finalWidth}px`,
        height: `${finalHeight}px`,
      }}
    >
      <MdOutlineEdit className={`w-${width} h-${height}`} />
    </button>
  );
};

export default EditButton;
