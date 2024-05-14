import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  CircularProgress,
  FormGroup,
} from "@mui/material";
import "../App.css";
import NavBar from "./Nav";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    console.log("autenticando");
    setLoading(false);
  };

  return (
    <Box>
      <NavBar />
      <Container
        maxWidth="xs"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FormGroup
          style={{
            height: "auto",
            width: "500px",
            padding: "15px",
            background: "#fff",
            borderRadius: "20px",
          }}
        >
          <form onSubmit={handleSubmit} className="form">
            <Typography variant="h5" align="center" gutterBottom>
              Iniciar sesión
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Usuario"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Iniciando"
                  )}
                </Button>
                <Box mt={3} textAlign={"center"}>
                  <Typography variant="body5">
                    Si no tienes acceso, comunícate con tu encargado.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </FormGroup>
      </Container>
    </Box>
  );
}

export default LoginForm;
