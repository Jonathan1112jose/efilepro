import { Box } from "@mui/material";
import Menu from "./Menu";
import "./css/style.css";
import Layout from "./Layout";

export default function Dashboard() {
  return (
    <Layout>
      <Box>
        <Menu />
      </Box>
    </Layout>
  );
}
