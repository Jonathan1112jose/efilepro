import { Box, Container } from "@mui/material";
import NavBar from "./Nav";
import { useAuth } from "../auth/AuthProvider";
import Menu from "./Menu";

export default function Dashbord() {
  const auth = useAuth();

  return (
    <Box>
      <NavBar />
      <Container>
        <Menu />
      </Container>
    </Box>
  );
}
