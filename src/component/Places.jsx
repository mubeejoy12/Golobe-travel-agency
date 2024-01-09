import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import instabulimg1 from "../assets/instabulimg.png";
import instabulimg2 from "../assets/Sybney.png";
import instabulimg3 from "../assets/Baku.png";
import instabulimg4 from "../assets/male.png";
import instabulimg5 from "../assets/Paris.png";
import instabulimg6 from "../assets/Newyork.png";
import instabulimg7 from "../assets/London.png";
import instabulimg8 from "../assets/Tokyo.png";
import instabulimg9 from "../assets/Dubai.png";

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
