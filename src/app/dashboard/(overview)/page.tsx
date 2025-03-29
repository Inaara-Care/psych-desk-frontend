'use client';
import React, { useEffect, useState } from 'react';
import bookingsData from '@/app/api/bookings/data.json';
import BookingCard from '@/components/BookingCard';
import BookingSection,{StatusSection} from '@/components/core/booking-section';
import {Status} from '@/components/core/booking-status';
const THRESHOLD = 3 * 309 + 2 * 16; // ~959px (constant)

const baseStyles: Record<StatusSection, React.CSSProperties> = {
  Upcoming: { background: "#F4FFF7", border: "1px solid #00AB30", color: "#00AB30" },
  Reschedule: { background: "rgba(255,249,237,1)", border: "1px solid rgba(255,165,0,1)", color: "rgba(255,165,0,1)" },
  Cancelled: { background: "rgba(255,244,247,1)", border: "1px solid rgba(244,0,4,1)", color: "rgba(244,0,4,1)" },
};

const BookingTabs = () => {
  const sections: { tab: StatusSection; status: StatusSection }[] = [
    { tab: 'Upcoming', status: 'Upcoming' },
    { tab: 'Reschedule', status: 'Reschedule' },
    { tab: 'Cancelled', status: 'Cancelled' },
  ];

  const filterBookings = (status: StatusSection) => {
    const statusMap = {
      Upcoming: 'Booked',
      Reschedule: 'Pending',
      Cancelled: 'Cancelled',
    } as const;
    return bookingsData.bookings.filter(
      (booking) => booking.status === statusMap[status]
    );
  };

  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth >= THRESHOLD);
    };

    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // no need for [THRESHOLD] because THRESHOLD is a file-level constant

  return (
    <div className="mx-auto h-screen overflow-hidden p-4">
      <div className={isHorizontal ? "overflow-x-auto h-full" : "h-full"}>
        <div className={`flex ${isHorizontal ? "flex-row flex-nowrap" : "flex-col"} gap-4 h-full`}>
          {sections.map(({ tab, status }) => (
            <div
              key={tab}
              className="flex flex-col h-full"
              style={{ minWidth: "309px", maxWidth: "309px" }}
            >
              <BookingSection status={status} width={309} fillWidth />

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-[#1A1A1A]">Today</h3>
                  <span
                    className="box-border flex flex-col justify-center items-center py-1 px-2 w-5 h-5 border rounded-sm text-sm font-medium"
                    style={baseStyles[status]}
                  >
                    {filterBookings(status).length}
                  </span>
                </div>
              </div>

              <div
                className="mt-3 flex-1 overflow-y-auto min-h-0 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{ maxHeight: 'calc(100vh - 150px)' }}
              >
                {filterBookings(status).map((booking) => (
                  <BookingCard
                    key={booking.bookingId}
                    status={booking.status as Status}
                    name={booking.name}
                    bookingId={booking.bookingId}
                    date={booking.date}
                    time={booking.time}
                    platform={booking.platform}
                    onEdit={() => console.log('Edit booking:', booking.bookingId)}
                    width={309}
                    fillWidth
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingTabs;
