import React from "react";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Tools from "../components/Tools";
import Body from "../components/Body";

export default function Plantillas() {
  return (
    <Layout>
      <Box>
        <Header />
        <Tools />
        <Body />
      </Box>
    </Layout>
  );
}
