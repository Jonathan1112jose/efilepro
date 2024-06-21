import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProvider } from "./auth/AuthProvider";
import { BitacoraProvider } from "./auth/BitacoraProvider";
import { ModuleDataProvider } from "./auth/ModuleProvider";
import { MenuDataProvider } from "./auth/MenuDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BitacoraProvider>
      <ModuleDataProvider>
        <AuthProvider>
          <MenuDataProvider>
            <RouterProvider router={router} />
          </MenuDataProvider>
        </AuthProvider>
      </ModuleDataProvider>
    </BitacoraProvider>
  </React.StrictMode>
);

reportWebVitals();
