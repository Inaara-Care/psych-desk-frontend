<<<<<<< HEAD
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
=======
<<<<<<<< HEAD:src/app/dashboard/page.tsx
'use client';
import { StatsCard, RevenueChart, AnalyticsChart } from '@/components';
import React from 'react';

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
========
import { AnalyticsChart, RevenueChart, StatsCard } from '@/components';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
>>>>>>>> 496ce01 (Feat/analytics (#3)):src/app/dashboard/(overview)/page.tsx
        <StatsCard
          title="Total session"
          value="24"
          trend={{ value: '00', label: 'in sessions of &quot;depression&quot;', isPositive: true }}
          icon="clipboard"
        />
        <StatsCard
          title="Appointments"
          value="56"
          trend={{ value: '00', label: 'in &quot;new appointments&quot;', isPositive: false }}
          icon="calendar"
        />
        <StatsCard
          title="Total income"
          value="240K"
          trend={{ value: '00', label: 'than last month', isPositive: false }}
          icon="rupee"
        />
        <StatsCard
          title="Current patients"
          value="12"
          trend={{ value: '00', label: 'than last month', isPositive: false }}
          icon="users"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Revenue statistic</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-green-500">
                  00% in sessions of &quot;depression&quot;
                </span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <RevenueChart />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          <AnalyticsChart />
>>>>>>> 496ce01 (Feat/analytics (#3))
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default BookingTabs;
=======
export default DashboardPage;
>>>>>>> 496ce01 (Feat/analytics (#3))
