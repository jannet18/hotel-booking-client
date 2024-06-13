import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

function EditHotel() {
  const { hotelId } = useParams();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const { data } = useQuery(
    ["fetchMyHotelById", hotelId],
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );
  const { mutate, isLoading } = useMutation(
    (formData) => apiClient.updateMyHotelById(hotelId, formData),
    {
      onSuccess: () => {
        showToast({ message: "Hotel updated!", type: "SUCCESS" });
        navigate("/my-hotels");
      },
      onError: () => {
        showToast({ message: "Error updating Hotels", type: "ERROR" });
      },
    }
  );

  const handleSave = (formData) => {
    mutate(formData);
  };
  return (
    <ManageHotelForm hotel={data} onSave={handleSave} isLoading={isLoading} />
  );
}

export default EditHotel;
