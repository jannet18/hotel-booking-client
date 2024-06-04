import React from "react";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useMutation } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";
function AddHotel() {
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
}

export default AddHotel;
