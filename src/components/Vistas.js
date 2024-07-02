// Vistas.js
import React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./css/vistas.css"; // Importar estilos CSS

const Vistas = ({ viewType, data }) => {
  const renderList = () => {
    if (data.length === 0) {
      return (
        <Box p={2}>
          <Typography variant="h6">No hay registros aún</Typography>
        </Box>
      );
    }

    // Obtener las claves de la primera entrada de datos (si hay alguna)
    const keys = Object.keys(data[0]);

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="table-header">
              {keys.map((key) => (
                <TableCell key={key}>{formatHeader(key)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                style={{ borderBottom: "1px solid #ccc" }}
              >
                {keys.map((key) => (
                  <TableCell key={key}>
                    {key === "fav" ? (
                      item[key] ? (
                        <IconButton disabled>
                          <StarIcon style={{ color: "#fdd835" }} />
                        </IconButton>
                      ) : (
                        <IconButton disabled>
                          <StarIcon style={{ color: "#ccc" }} />
                        </IconButton>
                      )
                    ) : (
                      item[key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const formatHeader = (key) => {
    // Manejar diferentes convenciones de capitalización y separación de palabras
    return key
      .replace(/_/g, " ") // Reemplazar guiones bajos con espacios
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Separar camelCase
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Manejar casos como NombreProyecto
      .split(" ") // Dividir por espacios
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalizar cada palabra
      .join(" "); // Unir con espacio
  };

  const renderCards = () => {
    if (data.length === 0) {
      return (
        <Box p={2}>
          <Typography variant="h6">No hay registros aún</Typography>
        </Box>
      );
    }

    return (
      <Box display="flex" flexWrap="wrap" gap={2} p={2}>
        {data.map((item) => (
          <Card key={item.id} className="card">
            <CardContent>
              <Typography variant="h6">{item.nombre_proyecto}</Typography>
              <Typography variant="body1" color="textSecondary">
                Código Interno: {item.codigointerno}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Fecha de Creación: {item.fechacreacion}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                {item.fav ? (
                  <StarIcon className="star-icon" />
                ) : (
                  <StarBorderIcon className="star-icon" />
                )}
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  };

  const getViewContent = () => {
    switch (viewType) {
      case "list":
        return renderList();
      case "cards":
        return renderCards();
      default:
        return renderList();
    }
  };

  return <div>{getViewContent()}</div>;
};

export default Vistas;
