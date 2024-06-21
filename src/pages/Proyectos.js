import React from "react";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import Header from "../components/Header";

export default function Lotes() {
  const selectedOption = "Proyectos"; // Ejemplo: establecer la opción seleccionada
  return (
    <Layout>
      <Box>
        <Header selectedOption={selectedOption} />
      </Box>
    </Layout>
  );
}
