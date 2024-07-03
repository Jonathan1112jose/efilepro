import React, { useState } from "react";
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
  Checkbox,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./css/vistas.css";

const Vistas = ({ viewType, data, onRecordSelect }) => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleRecordSelect = (record) => {
    const newSelectedRecord =
      selectedRecord && selectedRecord.id === record.id ? null : record;
    setSelectedRecord(newSelectedRecord);
    onRecordSelect(newSelectedRecord);
  };

  const renderList = () => {
    const dataFilter = data.filter((item) => !item.fechaeliminacion);
    if (dataFilter.length === 0) {
      return (
        <Box p={2}>
          <Typography variant="h6">No hay registros aún</Typography>
        </Box>
      );
    }

    const keys = Object.keys(dataFilter[0]);

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="table-header">
              <TableCell>{""}</TableCell>
              {keys.map((key) => (
                <TableCell key={key}>{formatHeader(key)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFilter.map((item) => (
              <TableRow
                key={item.id}
                style={{
                  borderBottom: "1px solid #ccc",
                  backgroundColor:
                    selectedRecord && selectedRecord.id === item.id
                      ? "#f0f0f0"
                      : "inherit",
                }}
                onClick={() => handleRecordSelect(item)}
              >
                <TableCell>
                  <Checkbox
                    checked={
                      selectedRecord ? selectedRecord.id === item.id : false
                    }
                    onChange={() => handleRecordSelect(item)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </TableCell>
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
    return key
      .replace(/_/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const renderCards = () => {
    const dataFilter = data.filter((item) => !item.fechaeliminacion);
    if (dataFilter.length === 0) {
      return (
        <Box p={2}>
          <Typography variant="h6">No hay registros aún</Typography>
        </Box>
      );
    }

    return (
      <Box display="flex" flexWrap="wrap" gap={2} p={2}>
        {dataFilter.map((item) => (
          <Card
            key={item.id}
            className={`card ${
              selectedRecord && selectedRecord.id === item.id ? "selected" : ""
            }`}
            onClick={() => handleRecordSelect(item)}
          >
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
                  <StarBorderIcon className="star-border-icon" />
                )}
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  };

  return (
    <Box className="vistas-container">
      {viewType === "list" ? renderList() : renderCards()}
    </Box>
  );
};

export default Vistas;
