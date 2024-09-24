import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";
import { AppContextProvider, useAppContext } from "./contexts/AppContext.jsx";
// useAppContext = AppContextProvider;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <SearchContextProvider>
            <app-context />
          </SearchContextProvider>
        </AppContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
