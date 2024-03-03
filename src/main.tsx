import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ModeDataProvider } from "./context/modeContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModeDataProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ModeDataProvider>
  </React.StrictMode>
);
