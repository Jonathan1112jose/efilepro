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
import { useBitacora } from "../auth/BitacoraProvider";

export default function NavBar() {
  const auth = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
                eFilePro
              </Link>
            </Typography>
            <div>
              {auth.isAuthenticated ? (
                <div>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    style={{
                      display: "inline-block",
                      textTransform: "capitalize",
                      marginRight: "9px",
                    }}
                  >
                    welcome {auth.user.username} ||
                  </Typography>
                  <Button
                    variant="primary"
                    onClick={auth.logout}
                    style={{ textTransform: "capitalize" }}
                    endIcon={<ExitToAppIcon />}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
