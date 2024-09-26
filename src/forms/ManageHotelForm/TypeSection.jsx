import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";

import React from "react";

function TypeSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 ">Type </h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
        {hotelTypes.map((hotelType, i) => (
          <label
            key={i}
            className={
              typeWatch === hotelType
                ? "cursor-pointer bg-blue-300 text-sm rounded-full px-3 py-2 font-semibold text-center "
                : "cursor-pointer bg-gray-300 text-sm rounded-full px-3 py-2 font-semibold text-center "
            }
          >
            <input
              type="radio"
              value={hotelType}
              className="hidden "
              {...register("type", { required: "This field is required" })}
            />
            <span>{hotelType}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
}

export default TypeSection;
