import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Cards from "./Cards";

const Places = () => {
  return (
    <Box sx={{ border: "2px solid green" }}>
      <Grid container spacing={2}>
        {" "}
        {/* Adjust spacing as needed */}
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>
        <Cards/>
          </Paper>
          {/* Content for the first grid item */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>hjbhb</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>hjbhb</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>hjbhb</Paper>
          {/* Content for the first grid item */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>hjbhb</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper>hjbhb</Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Places;
