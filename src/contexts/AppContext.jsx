import React, { useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || "";

const appContext = React.createContext();

const stripePromise = loadStripe(STRIPE_PUB_KEY);

const AppContext = ({ children }) => {
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
    <AppContext
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
        stripePromise,
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
    </AppContext>
  );
};

export { appContext };

export default AppContext;
