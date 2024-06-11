import { Box } from "@mui/material";
import NavBar from "./Nav";

export default function Layout({ children }) {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
}
