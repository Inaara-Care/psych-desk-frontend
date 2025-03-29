'use client';
import React from 'react';
import bookingsData from '@/app/api/bookings/data.json';
import BookingCard from '@/components/BookingCard';
import BookingSection, { StatusSection } from '@/components/core/booking-section';

const baseStyles: Record<StatusSection, React.CSSProperties> = {
  Upcoming: {
    background: "#F4FFF7",
    border: "1px solid #00AB30",
    color: "#00AB30",
  },
  Reschedule: {
    background: "rgba(255,249,237,1)",
    border: "1px solid rgba(255,165,0,1)",
    color: "rgba(255,165,0,1)",
  },
  Cancelled: {
    background: "rgba(255,244,247,1)",
    border: "1px solid rgba(244,0,4,1)",
    color: "rgba(244,0,4,1)",
  },
};

// Define a Booking interface matching your JSON data
interface Booking {
  bookingId: string;
  status: "Booked" | "Pending" | "Cancelled";
  name: string;
  date: string;
  time: string;
  platform: string;
}

// If needed, cast bookingsData.bookings to Booking[]
const bookings: Booking[] = bookingsData.bookings as Booking[];

const BookingTabs = () => {
  const sections: { tab: StatusSection; status: StatusSection }[] = [
    { tab: 'Upcoming', status: 'Upcoming' },
    { tab: 'Reschedule', status: 'Reschedule' },
    { tab: 'Cancelled', status: 'Cancelled' },
  ];

  // Filter bookings by status
  const filterBookings = (status: StatusSection): Booking[] => {
    const statusMap = {
      Upcoming: 'Booked',
      Reschedule: 'Pending',
      Cancelled: 'Cancelled',
    } as const;
    return bookings.filter((booking: Booking) => booking.status === statusMap[status]);
  };

  return (
    <div className="mx-auto h-screen overflow-hidden p-4">
      {/* Outer wrapper that can horizontally scroll if the columns don't fit */}
      <div className="h-full w-full overflow-x-auto">
        {/* Flex container: no wrapping, horizontal scroll if needed, gap-4 for spacing */}
        <div className="booking-sections flex flex-nowrap gap-4 h-full w-full">
          {sections.map(({ tab, status }) => (
            <div 
              key={tab}
              className="flex flex-col h-full flex-1 min-w-[309px]" 
            >
              {/* Section Title */}
              <BookingSection status={status} width={309} fillWidth />

              <div className="mt-3">
                {/* Heading row (Today + count) */}
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

              {/* Scrollable container for booking cards */}
              <div
                className="mt-3 flex-1 overflow-y-auto min-h-0 space-y-4 
                           scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{ maxHeight: 'calc(100vh - 150px)' }}
              >
                {filterBookings(status).map((booking: Booking) => (
                  <BookingCard
                    key={booking.bookingId}
                    status={booking.status}
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
