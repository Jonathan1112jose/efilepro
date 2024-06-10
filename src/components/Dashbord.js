import { Box, Container } from "@mui/material";
import NavBar from "./Nav";
import Menu from "./Menu";

export default function Dashbord() {
  return (
    <Box>
      <NavBar />
      <Container>
        <Menu />
      </Container>
    </Box>
  );
}
