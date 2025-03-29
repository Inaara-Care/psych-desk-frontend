'use client';
import React from "react";
import EditButton from "@/components/core/edit-button";
import { FaClock } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { BookingStatus } from "../core";

const borderColorMap: Record<BookingStatus, string> = {
  Booked:    "border-[rgba(0,167,72,1)]",
  Pending:   "border-[rgba(255,165,0,1)]",
  Recurring: "border-[rgba(0,131,255,1)]",
  Cancelled: "border-[rgba(244,0,4,1)]",
};

const shadowMap: Record<BookingStatus, string> = {
  Booked:    "0px 2px 12px rgba(0,171,48,0.25)",
  Pending:   "0px 2px 12px rgba(255,165,0,0.25)",
  Recurring: "0px 2px 12px rgba(0,131,255,0.25)",
  Cancelled: "0px 2px 12px rgba(244,0,4,0.25)",
};

interface BookingCardProps {
  status: BookingStatus;
  name: string;
  bookingId: string;
  date: string;
  time: string;
  platform: string;
  onEdit?: () => void;
  /** The fixed numeric width (in pixels) when fillWidth is false */
  width?: number;
  /** When true, the card fills the available width (overrides the numeric width) */
  fillWidth?: boolean;
  height?: number;
  padding?: number;
}

const BookingCard: React.FC<BookingCardProps> = ({
  status,
  name,
  bookingId,
  date,
  time,
  platform,
  onEdit,
  fillWidth = false,
  width = 309,
  height = 214,
  padding = 20,
}) => {
  // Use numeric width for scaling calculations even if fillWidth is true.
  const numericWidth = Math.max(width, 309);
  const effectiveHeight = Math.max(height, 214);
  const effectivePadding = Math.max(padding, 20);
  // Calculate scaling factors based on reference values.
  const scale = Math.min(
    numericWidth / 309,
    effectiveHeight / 214,
    effectivePadding / 20
  );

  return (
    <div
      className={`
        border rounded-lg p-4 bg-white ${borderColorMap[status]} ${fillWidth ? "w-full" : ""}
      `}
      style={{
        borderWidth: "2px",
        boxShadow: shadowMap[status],
        borderRadius: "12px",
        width: fillWidth ? "100%" : `${numericWidth}px`,
        minWidth: `${numericWidth}px`,
        height: `${effectiveHeight}px`,
        minHeight: `${effectiveHeight}px`,
        padding: `${effectivePadding}px`,
      }}
    >
      <div className="flex justify-between items-start" style={{ marginBottom: `${8 * scale}px` }}>
        <BookingStatus status={status} />
        <EditButton onClick={onEdit} />
      </div>

      <div className="flex flex-col" style={{ marginBottom: `${8 * scale}px` }}>
        <h2 className="text-lg font-semibold" style={{ fontSize: `${18 * scale}px` }}>{name}</h2>
        <p className="text-sm text-gray-500" style={{ fontSize: `${14 * scale}px` }}>{bookingId}</p>
      </div>

      <div className="flex flex-col">
        <div className="flex text-gray-600" style={{ fontSize: `${14 * scale}px`, marginBottom: `${8 * scale}px` }}>
          <IoMdCalendar className="mr-1 text-gray-500" style={{ width: `${16 * scale}px`, height: `${16 * scale}px` }} />
          <span>{date}</span>
        </div>

        <div className="flex items-center text-gray-600" style={{ fontSize: `${14 * scale}px`, marginBottom: `${8 * scale}px` }}>
          <FaClock className="mr-1 text-gray-500" style={{ width: `${16 * scale}px`, height: `${16 * scale}px` }} />
          <span>{time}</span>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            style={{ fontSize: `${14 * scale}px` }}
          >
            <img 
              src="/meet.svg" 
              alt="Google Meet" 
              className="mr-1" 
              style={{ width: `${16 * scale}px`, height: `${16 * scale}px` }} 
            />
            {platform}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
