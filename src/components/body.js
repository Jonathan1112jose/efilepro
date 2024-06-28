import React, { useState } from "react";
import { Grid, Paper, AppBar, Toolbar, Button } from "@mui/material";
import "./css/body.css"; // Estilo CSS para
import FormNew from "./FormNew";

const Body = () => {
  const [selectedView, setSelectedView] = useState("form");

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  return (
    <Grid container spacing={2} className="body-container">
      {/* Barra de herramientas */}
      <Grid item xs={12}>
        <AppBar position="static" className="toolbar">
          <Toolbar>
            <Button color="inherit" onClick={() => handleViewChange("form")}>
              Formulario
            </Button>
            <Button color="inherit" onClick={() => handleViewChange("vistas")}>
              Vistas
            </Button>
            <Button
              color="inherit"
              onClick={() => handleViewChange("detalles")}
            >
              Detalles
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>

      {/* Contenido principal */}
      <Grid item xs={12}>
        <Paper className="content-paper">
          {/* Renderizar el componente según la vista seleccionada */}
          {selectedView === "form" && <FormNew />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Body;
