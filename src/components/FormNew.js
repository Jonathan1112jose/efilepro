import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
  Tab,
  Tabs,
  Card,
  CardContent,
} from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star";
import "./css/FormNew.css";

const FormNew = () => {
  const [fav, setFav] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Paper className="form-container" elevation={3}>
      <Tabs value={tabIndex} onChange={handleTabChange} className="tabs">
        <Tab label="Información General" />
        <Tab label="Vista" />
      </Tabs>

      <Box className="tab-content">
        {tabIndex === 0 && (
          <Box className="section">
            <Typography variant="h6" className="section-title">
              Información General
            </Typography>
            <Box className="form-field">
              <TextField
                label="Nombre"
                variant="standard"
                fullWidth
                InputProps={{ className: "custom-input" }}
                InputLabelProps={{ className: "custom-label" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<StarBorder />}
                    checkedIcon={<Star />}
                    checked={fav}
                    onChange={(e) => setFav(e.target.checked)}
                    name="fav"
                  />
                }
                label="Favorito"
                className="fav-checkbox"
              />
            </Box>
            <TextField
              label="Codigo Interno del lote"
              variant="standard"
              fullWidth
              className="form-field"
              InputProps={{ className: "custom-input" }}
              InputLabelProps={{ className: "custom-label" }}
            />
            <TextField
              label="Observaciones"
              variant="standard"
              multiline
              rows={4}
              fullWidth
              className="form-field"
              InputProps={{ className: "custom-input" }}
              InputLabelProps={{ className: "custom-label" }}
            />
            <Box className="section">
              <Typography variant="h6" className="section-title">
                Registro
              </Typography>
              <Box className="form-field">
                <TextField
                  label="Creación"
                  variant="standard"
                  fullWidth
                  InputProps={{ readOnly: true, className: "custom-input" }}
                  InputLabelProps={{ className: "custom-label" }}
                />
              </Box>
              <Box className="form-field">
                <TextField
                  label="Actualización"
                  variant="standard"
                  fullWidth
                  InputProps={{ readOnly: true, className: "custom-input" }}
                  InputLabelProps={{ className: "custom-label" }}
                />
              </Box>
              <Box className="form-field">
                <TextField
                  label="Eliminación"
                  variant="standard"
                  fullWidth
                  InputProps={{ readOnly: true, className: "custom-input" }}
                  InputLabelProps={{ className: "custom-label" }}
                />
              </Box>
            </Box>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box className="vista-section">
            {[1, 2, 3].map((value) => (
              <Card key={value} className="vista-card">
                <CardContent>
                  <Typography>Card {value}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default FormNew;
