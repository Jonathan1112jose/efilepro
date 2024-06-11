import { Box } from "@mui/material";
import Menu from "./Menu";
import "./style.css";
import Layout from "./Layout";
import NavBar from "./Nav";

export default function Dashboard() {
  return (
    <Layout>
      <Box>
        <Menu />
      </Box>
    </Layout>
  );
}
