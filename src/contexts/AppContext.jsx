import React, { createContext, useContext, useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(undefined);
  const { data, isError, isLoading } = useQuery(
    ["validate-token"],
    apiClient.validateToken,
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (isError) {
      setToast({ message: "Token Invalid", type: "error" });
    }
  }, [isError]);

  // const contextValue = {
  //   showToast: (toastMessage) => {
  //     setToast(toastMessage);
  //   },
  //   isLoggedIn: !isError && !isLoading && data?.valid,
  //   isLoading,
  // };

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: data?.valid === true,
      }}
      // value={contextValue}
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

// export default AppContextProvider;
