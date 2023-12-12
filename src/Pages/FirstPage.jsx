import React from "react";
import { Stack, Box } from "@mui/material";
import globeImage from "../assets/Rectangle.png";

const containerStyle = {
  width: "1380px",
  height: "599px",
  border: "2px solid blue",
  margin: "0 auto",
  backgroundImage: `url(${globeImage})`,
  backgroundImageRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "24px"
  

};

const FirstPage = () => {
  return <Stack sx={containerStyle}></Stack>;
};

export default FirstPage;
