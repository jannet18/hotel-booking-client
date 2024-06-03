import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
const AppContext = createContext("");

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  const { isError } = useQuery("validate-token", apiClient.validateToken, {
    retry: false,
  });

  // useEffect(() => {
  //   if (isError) {
  //     setToast({ message: "Token Invalid", type: "error" });
  //   }
  //   // setToast("");
  // }, [isError]);

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

// export default AppContext;
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
