import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../components/Dashbord";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
    ],
  },
]);
