// Body.js

import React from "react";
import { Grid, Paper } from "@mui/material";
import "./css/body.css";

const Body = () => {
  return (
    <div className="body-wrapper">
      <Grid container spacing={2} className="body-container">
        <Grid item xs={3} className="left-column">
          <Paper className="yellow-rectangle"></Paper>
        </Grid>
        <Grid item xs={9} className="right-column"></Grid>
      </Grid>
    </div>
  );
};

export default Body;
