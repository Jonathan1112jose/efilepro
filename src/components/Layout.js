import { Box } from "@mui/material";
import NavBar from "./Nav";
import { useAuth } from "../auth/AuthProvider";
import { useBitacora } from "../auth/BitacoraProvider";

export default function Layout({ children }) {
  const auth = useAuth();
  const logActivity = useBitacora();
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
}
