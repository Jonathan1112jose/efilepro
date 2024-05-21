import { Box } from "@mui/material";
import NavBar from "./Nav";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Singup from "./Singup";

export default function Dashbord() {
  const auth = useAuth();
  return (
    <Box>
      <NavBar />
      <h1 style={{ color: "#fff" }}>DASHBORD</h1>
    </Box>
  );
}
