import React, { useEffect, useState } from "react";
import * as apiClient from "../api-client";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext";
import { useParams } from "react-router-dom";
import BookingDetailsSummary from "../components/BookingDetailsSummary";

function Booking() {
  const search = useSearchContext();
  const { hotelId } = useParams();
  const [numberOfNights, setNumberOfNights] = useState(0);

  useEffect(() => {
    if (search.checkIn && search.checkOut) {
      const nights =
        Math.abs(search.checkOut.getTIme() - search.checkIn.getTIme()) /
        (1000 * 60 * 60 * 24);
      setNumberOfNights(Math.ceil(nights));
    }
  }, [search.checkIn, search.checkOut]);

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId),
    {
      enabled: !!hotelId,
    }
  );
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  if (!hotel) {
    return <></>;
  }
  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <BookingDetailsSummary
        checkIn={search?.checkIn}
        checkOut={search?.checkOut}
        adultCount={search?.adultCount}
        childCount={search?.childCount}
        numberOfNights={numberOfNights}
        hotel={hotelId}
      />
      {/* <div className="bg-green-200">BOOKING DETAILS SUMMARY</div> */}
      {data?.currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
}

export default Booking;
