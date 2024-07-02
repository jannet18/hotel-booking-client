import React from "react";

function BookingDetailsSummary({
  checkIn,
  checkOut,
  childCount,
  adultCount,
  numberOfNights,
  hotel,
}) {
  return (
    <div className="grid gap-4 rounded-md border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-bb py-2">
        Location{" "}
        <span className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</span>
      </div>
    </div>
  );
}

export default BookingDetailsSummary;
