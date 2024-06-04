import React from "react";
import { useFormContext } from "react-hook-form";

function GuestsSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Guests</h1>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
        <label className="text-gray-700 text-sm font-semibold">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
        </label>
        {errors.adultCount?.message && (
          <span className="text-red-500 text-sm font-bold">
            {errors.adultCount?.message}
          </span>
        )}
        <label className="text-gray-700 text-sm font-semibold">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal"
            {...register("childCount", {
              required: "This field is required",
            })}
          />
        </label>
        {errors.childCount?.message && (
          <span className="text-red-500 text-sm font-bold">
            {errors.childCount?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default GuestsSection;
