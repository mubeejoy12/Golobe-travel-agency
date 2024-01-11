import { Grid, Stack } from "@mui/material";
import React from "react";
import HeadingTitle from "./HeadingTitle";
import ReviewCrad from "./ReviewCrad";

const Reviews = () => {
  return (
    <Stack
      sx={{ width: "1396px", height: "722px", border: "2px solid yellow" }}
    >
      <HeadingTitle
        title={"Reviews"}
        subtitle={"What people says about Golobe facilities"}
        buttonText={"See All"}
      />

      <Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ReviewCrad/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            vghgvg
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            vgvg
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Reviews;
