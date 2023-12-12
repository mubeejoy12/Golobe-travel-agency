import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import globeImage from "../assets/Rectangle.png";
import airplane from "../assets/airplane.png";

const containerStyle = {
  width: "1380px",
  height: "599px",
  border: "2px solid blue",
  margin: "0 auto",
  backgroundImage: `url(${globeImage})`,
  backgroundImageRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "24px",
  marginTop: "30px",
};

const navBar = {
  border: "2px solid blue",
  marginTop: "30px",
  height: "96px",
  display: "flex",
  flexDirection: "row",
};
const itemOne = {
  border: "2px solid yellow",
  width: "242px",
};
const itemTwo = {
  border: "2px solid purple",
};
const itemThree = {
  border: "2px solid red",
};

const FirstPage = () => {
  return (
    <Stack sx={containerStyle}>
      <Stack sx={navBar}>
        <Stack sx={itemOne}>
          <img src={airplane} sx={{ width: "24px", height: "24px" }} alt="" />
          <Typography variant="h9" color="initial">
            findFlight
          </Typography>
        </Stack>
        <Stack sx={itemTwo}>hcxghvcg</Stack>
        <Stack sx={itemThree}>chbcgbvdsyb</Stack>
      </Stack>
    </Stack>
  );
};

export default FirstPage;
