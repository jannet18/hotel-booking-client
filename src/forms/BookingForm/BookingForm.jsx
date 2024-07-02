import React from "react";
import { useForm } from "react-hook-form";

function BookingForm({ currentUser }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 rounded-sm border border-slate-300 p-2"
    >
      <span className="text-3xl font-bold">Confirm Your Details</span>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-gray-700 text-sm font-bold flex-1 ">
          First Name
          <input
            type="text"
            className="mt-1  border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
            readOnly
            disabled
            {...register("firstName")}
          />
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1 ">
          Last Name
          <input
            type="text"
            className="mt-1  border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
            readOnly
            disabled
            {...register("lastName")}
          />
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1 ">
          Email
          <input
            type="text"
            className="mt-1  border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
            readOnly
            disabled
            {...register("email")}
          />
        </label>
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
