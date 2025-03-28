import React from "react";
import BookingStatus, { Status } from "@/components/core/booking-status";
import EditButton from "@/components/core/edit-button";
import { FaClock } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";


const borderColorMap: Record<Status, string> = {
  Booked:    "border-[rgba(0,167,72,1)]",
  Pending:   "border-[rgba(255,165,0,1)]",
  Recurring: "border-[rgba(0,131,255,1)]",
  Cancelled: "border-[rgba(244,0,4,1)]",
};

const shadowMap: Record<Status, string> = {
  Booked:    "0px 2px 12px rgba(0,171,48,0.25)",
  Pending:   "0px 2px 12px rgba(255,165,0,0.25)",
  Recurring: "0px 2px 12px rgba(0,131,255,0.25)",
  Cancelled: "0px 2px 12px rgba(244,0,4,0.25)",
};

interface BookingCardProps {
  status: Status;
  name: string;
  bookingId: string;
  date: string;
  time: string;
  platform: string;
  onEdit?: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  status,
  name,
  bookingId,
  date,
  time,
  platform,
  onEdit,
}) => {
  const borderColor = borderColorMap[status];
  const boxShadow = shadowMap[status];

  return (
    <div
      className={`
        w-full max-w-sm
        border rounded-lg p-4
        bg-white
        ${borderColor}
      `}
      style={{
        borderWidth: "2px",
        boxShadow: boxShadow,
        borderRadius: "12px",
        width: "309px",
        height: "214px",
      }}
    >
      {/* Top Row: Status Badge + Edit Icon */}
      <div className="flex justify-between items-start">
        <BookingStatus status={status} />
        <EditButton onClick={onEdit} />
      </div>

      {/* Booking Details */}
      <div className="mt-2 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{bookingId}</p>

        {/* Date */}
        <div className="flex items-center text-sm text-gray-600">
          <IoMdCalendar className="w-4 h-4 mr-1 text-gray-500" />
          <span>{date}</span>
        </div>

        {/* Time */}
        <div className="flex items-center text-sm text-gray-600">
          <FaClock className="w-4 h-4 mr-1 text-gray-500" />
          <span>{time}</span>
        </div>

        {/* Platform (e.g., Gmeet) */}
        <div>
          <button
            type="button"
            className="
              inline-flex items-center px-3 py-1 text-sm font-medium
              border border-gray-300 rounded bg-gray-100 hover:bg-gray-200
              text-gray-700 transition-colors
            "
          >
            <img src="/meet.svg" alt="Google Meet" className="w-4 h-4 mr-1" />
            {platform}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
