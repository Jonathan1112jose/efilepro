import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { logout, useAuth } from "../auth/AuthProvider";

export default function NavBar() {
  const auth = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
                eFilePro
              </Link>
            </Typography>
            <Typography>
              {auth.isAuthenticated ? (
                <Button onClick={console.log("cerrando secion")}>logout</Button>
              ) : (
                ""
              )}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}