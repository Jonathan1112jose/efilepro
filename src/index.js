import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProvider } from "./auth/AuthProvider";
import { BitacoraProvider } from "./auth/BitacoraProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BitacoraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </BitacoraProvider>
  </React.StrictMode>
);

reportWebVitals();
