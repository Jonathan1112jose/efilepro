import React, { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";
import StarBorder from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star";
import "./css/FormNew.css";
import { useModuleDataContext } from "../auth/ModuleProvider";
import { useToolsContext } from "../auth/ToolsProvider";
import { saveData } from "../auth/ModuleApi";

const FormNew = () => {
  const [fav, setFav] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    codigoInterno: "",
    observaciones: "",
    fav: false,
    fechaCreacion: null,
    fechaActualizacion: null,
    fechaEliminacion: null,
  });
  const [tabIndex, setTabIndex] = useState(0);
  const { moduleData } = useModuleDataContext();
  const { handleFormDataChange } = useToolsContext();

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      fechaCreacion: new Date().toISOString(),
    }));
  }, []);

  useEffect(() => {
    handleFormDataChange(formData);
  }, [formData, handleFormDataChange]);

  return (
    <Paper className="form-container" elevation={3}>
      <Tabs value={tabIndex} onChange={handleTabChange} className="tabs">
        <Tab label="Información General" />
      </Tabs>

      <Box className="tab-content">
        {tabIndex === 0 && (
          <Box className="section">
            <Typography variant="h6" className="section-title">
              Información General
            </Typography>
            <Box className="form-field">
              <TextField
                label={`Nombre ${moduleData.label}`}
                variant="standard"
                fullWidth
                InputProps={{ className: "custom-input" }}
                InputLabelProps={{ className: "custom-label" }}
                name="nombre"
                onChange={handleChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<StarBorder />}
                    checkedIcon={<Star />}
                    checked={fav}
                    onChange={(e) => {
                      setFav(e.target.checked);
                      setFormData((prevData) => ({
                        ...prevData,
                        fav: e.target.checked,
                      }));
                    }}
                    name="fav"
                  />
                }
                label="Favorito"
                className="fav-checkbox"
              />
            </Box>
            <TextField
              label="Codigo Interno"
              variant="standard"
              fullWidth
              className="form-field"
              InputProps={{ className: "custom-input" }}
              InputLabelProps={{ className: "custom-label" }}
              name="codigoInterno"
              onChange={handleChange}
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
              name="observaciones"
              onChange={handleChange}
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
                  name="fechaCreacion"
                />
              </Box>
              <Box className="form-field">
                <TextField
                  label="Actualización"
                  variant="standard"
                  fullWidth
                  InputProps={{ readOnly: true, className: "custom-input" }}
                  InputLabelProps={{ className: "custom-label" }}
                  name="fechaActualizacion"
                />
              </Box>
              <Box className="form-field">
                <TextField
                  label="Eliminación"
                  variant="standard"
                  fullWidth
                  InputProps={{ readOnly: true, className: "custom-input" }}
                  InputLabelProps={{ className: "custom-label" }}
                  name="fechaEliminacion"
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default FormNew;
