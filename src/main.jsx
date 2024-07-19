import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchContextProvider } from "./contexts/SearchContext.jsx";
import AppContext from "./contexts/AppContext.jsx";

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
        <AppContext>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </AppContext>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
