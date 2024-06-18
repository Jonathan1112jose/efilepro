import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";
import Proyectos from "../pages/Proyectos";
import Lotes from "../pages/Lotes";
import Plantillas from "../pages/Plantillas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "proyectos",
        element: <Proyectos />,
      },
      {
        path: "lotes",
        element: <Lotes />,
      },
      {
        path: "plantillas",
        element: <Plantillas />,
      },
    ],
  },
]);
