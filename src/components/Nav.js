import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                eFilePro
              </NavLink>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
