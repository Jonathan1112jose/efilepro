import { Box } from "@mui/material";
import NavBar from "./Nav";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Menu from "./NavBar";

export default function Dashbord() {
  const auth = useAuth();

  return (
    <Box>
      <NavBar />
      <h1 style={{ color: "#fff" }}>dashboard</h1>
      <Menu />
    </Box>
  );
}
