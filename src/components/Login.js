import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  CircularProgress,
  FormGroup,
  Alert,
} from "@mui/material";
import "../App.css";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./Layout";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        auth.login(data.username, data.rol);
      } else {
        setError(data.message || "Datos Incorrectos");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setError("Error de red. Inténtalo de nuevo.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Box>
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
                    value={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Contraseña"
                    variant="outlined"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                {error && (
                  <Grid item xs={12}>
                    <Alert severity="error">{error}</Alert>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress color="inherit" size={24} />
                    ) : (
                      "INICIAR"
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
    </Layout>
  );
}

export default LoginForm;
