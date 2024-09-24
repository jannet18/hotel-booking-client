import React from "react";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import app-context from "../contexts/app-context";
import { useNavigate } from "react-router-dom";

function LogOutButton() {
  const queryClient = useQueryClient();
  const { showToast } = useContext(app-context);
  const navigate = useNavigate();

  const mutation = useMutation(apiClient.logOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logged Out!", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = (data) => {
    mutation.mutate(data);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-blue-600 px-2 py-1 cursor-pointer font-bold rounded-sm bg-white hover:bg-gray-100 sm:py-2 w-full"
    >
      Sign Out
    </button>
  );
}

export default LogOutButton;
