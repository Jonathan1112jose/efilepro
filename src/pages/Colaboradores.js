import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Tools from "../components/Tools";
import Body from "../components/Body";

export default function Colaboradores() {
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
