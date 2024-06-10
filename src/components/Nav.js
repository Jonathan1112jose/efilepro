import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

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
                <Button variant="primary" onClick={auth.logout}>
                  Logout {<ExitToAppIcon />}
                </Button>
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
