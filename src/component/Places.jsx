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
    <Box sx={{marginTop: "30px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg1}
            title="Istanbul, Turkey"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg2}
            title="Sydney Australia"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg3}
            title="Baku Azerbaijan"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg4}
            title="Malè Maldives"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg5}
            title="Paris, France"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg6}
            title="New york, USA"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg7}
            title="London, Uk"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg8}
            title="Tokyo, Japan"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Cards
            imageSrc={instabulimg9}
            title="Dubai, UEA"
            subtitle="Flights . Hotels . Resorts"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Places;
