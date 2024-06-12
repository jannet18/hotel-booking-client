import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImageSection from "./ImageSection";

// export const HotelFormData = {
//   name: "",
//   city: "",
//   counrty: "",
//   description: "",
//   type: "",
//   pricePerNight: 0,
//   starRating: 0,
//   facilities: "",
//   imageFiles: "",
//   imageUrls: "",
//   adultCount: 0,
//   childCount: 0,
// };

// function ManageHotelForm({ onSave, isLoading }) {
//   const formMethods = useForm();
//   const { handleSubmit } = formMethods;

//   const onSubmit = handleSubmit(({ formData: HotelFormData }) => {
//     //create new form data object and call Api
//     // console.log(formDataJson);
//     const formDataJson = new FormData();
//     formDataJson.append("name", HotelFormData?.name);
//     formDataJson.append("city", HotelFormData?.city);
//     formDataJson.append("country", HotelFormData?.country);
//     formDataJson.append("description", HotelFormData?.description);
//     formDataJson.append("type", HotelFormData?.type);
//     formDataJson.append(
//       "pricePerNight",
//       HotelFormData?.pricePerNight.toString()
//     );
//     formDataJson.append("starRating", HotelFormData?.starRating.toString());
//     formDataJson.append("adultCount", HotelFormData?.adultCount.toString());
//     formDataJson.append("childCount", HotelFormData?.childCount.toString());

//     HotelFormData?.facilities.forEach((facility, index) => {
//       formDataJson.append(`facilities[${index}]`, facility);
//     });
//     Array.from(HotelFormData ?? [].imageFiles).forEach((imageFile) => {
//       formDataJson.append(`imageFiles`, imageFile);
//     });

//     // for (let pair of formData.entries()) {
//     //   console.log(`${pair[0]}: ${pair[1]}`);
//     // }
//     onSave(formDataJson);
//     // console.log(onSave);
//   });
//   return (
//     <FormProvider {...formMethods}>
//       <form className="flex flex-col gap-10 " onSubmit={onSubmit}>
//         <DetailsSection />
//         <TypeSection />
//         <FacilitiesSection />
//         <GuestsSection />
//         <ImageSection />
//         <span className="flex items-center justify-end">
//           <button
//             disabled={isLoading}
//             type="submit"
//             className="bg-blue-600 rounded-sm text-white p-2 font-bold hover:bg-blue-400 text-xl"
//           >
//             {isLoading ? "Saving..." : "Save"}
//           </button>
//         </span>
//       </form>
//     </FormProvider>
//   );
// }

// export default ManageHotelForm;

// export const HotelFormData = {};

// const  Props = {
//   hotel?: HotelType;
//   onSave: (hotelFormData: FormData) => void;
//   isLoading: boolean;
// };

const ManageHotelForm = ({ onSave, isLoading, hotel }) => {
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson) => {
    const formData = new FormData();
    if (hotel) {
      formData.append("hotelId", hotel._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImageSection />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
