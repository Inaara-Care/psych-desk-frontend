import React from "react";
import BookingCard from "@/components/BookingCard";

export default function BookingsPage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BookingCard
        status="Booked"
        name="Aishwarya Bhardwaj"
        bookingId="INAB0001"
        date="23 Feb 2025"
        time="09:00 - 10:00 AM"
        platform="Gmeet"
        onEdit={() => alert("Edit booking!")}
      />

      <BookingCard
        status="Pending"
        name="John Doe"
        bookingId="INAB0002"
        date="25 Feb 2025"
        time="10:00 - 11:00 AM"
        platform="Gmeet"
      />
    </div>
  );
}
