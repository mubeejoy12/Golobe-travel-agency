import { Grid, Stack } from "@mui/material";
import React from "react";
import HeadingTitle from "./HeadingTitle";
import ReviewCrad from "./ReviewCrad";
import cloudOne from "../assets/cloudOne.png";
import cloudTwo from "../assets/cloudTwo.png";
import cloudThree from "../assets/cloudThree.png";

const Reviews = () => {
  const reviewsData = [
    {
      reviewImage: cloudOne,
      heading: "“A real sense of community, nurtured”",
      subtitle:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
      name: "Olga",
      location: "Weave Studios – Kai Tak",
    },
    {
      reviewImage: cloudTwo,
      heading: "“The facilities are superb. Clean, slick, bright.”",
      subtitle:
        "“A real sense of community, nurtured”Really appreciate the help and support from the staff ..",
      name: "Thomas",
      location: "Weave Studios – Olympic",
    },
    {
      reviewImage: cloudThree,
      heading: "“A real sense of community, nurtured”",
      subtitle:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
      name: "Eliot",
      location: "Weave Studios – Kai Tak",
    },
    {
      reviewImage: cloudThree,
      heading: "“A real sense of community, nurtured”",
      subtitle:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
      name: "Eliot",
      location: "Weave Studios – Kai Tak",
    },

    {
      reviewImage: cloudThree,
      heading: "“A real sense of community, nurtured”",
      subtitle:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ..",
      name: "Eliot",
      location: "Weave Studios – Kai Tak",
    },
  ];
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
