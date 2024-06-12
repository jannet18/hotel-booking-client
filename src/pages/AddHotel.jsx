// import React from "react";
// import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
// import { useMutation } from "react-query";
// import { useAppContext } from "../contexts/AppContext";
// import * as apiClient from "../api-client";
// import { useNavigate } from "react-router-dom";
// function AddHotel() {
//   const { showToast } = useAppContext();
//   const navigate = useNavigate();

import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";

//   const mutation = useMutation(apiClient.addMyHotel, {
//     onSuccess: () => {
//       showToast({ message: "Hotel Saved!", type: "SUCCESS" });
//     },
//     onError: () => {
//       showToast({ message: "Error saving Hotel", type: "ERROR" });
//     },
//   });

//   const handleSave = (formData) => {
//     console.log("Saving hotel with data: ", formData);
//     // for (let pair of formData.entries()) {
//     //   console.log(`${pair[0]}: ${pair[1]}`);
//     // }
//     mutation.mutate(formData);
//   };
//   return (
//     <ManageHotelForm
//       onSave={handleSave}
//       // isLoading={isLoading}
//     />
//   );
// }

// export default AddHotel;

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (formData) => {
    mutate(formData);
    console.log("saving hotel with:", formData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
