import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import globeImage from "../assets/Rectangle.png";
import FlightIcon from "@mui/icons-material/Flight";
import BedIcon from "@mui/icons-material/Bed";
import Golobe from "../assets/golobeicon.png";

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
  background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6)",
};

const navBar = {
  border: "2px solid blue",
  marginTop: "30px",
  height: "96px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
};
const itemOne = {
  border: "2px solid yellow",
  width: "242px",
  display: "flex",
  flexDirection: "row",
};
const itemTwo = {
  with: "100px",
};
const itemThree = {
  border: "2px solid red",
  display: "flex",
  flexDirection: "row",
  gap: "30px",
};
const firstIcon = {
  color: "white",
};
const secondIcon = {
  color: "white",
};
const imageStyle = {
  width: "110.36px",
  height: "36px",
};
const gradientOverlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 60%)",
  borderRadius: "24px",
};

const FirstPage = () => {
  return (
    <Stack sx={containerStyle}>
      <Stack style={gradientOverlayStyle}></Stack>
      <Stack sx={navBar}>
        <Stack sx={itemOne}>
          <Box
            sx={{
              display: "flex",
              alightItems: "center",
              justifyContent: "center",
            }}
          >
            <FlightIcon sx={firstIcon} />
            <Typography variant="h9" color="White">
              find Flight
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <BedIcon sx={secondIcon} />
            <Typography variant="h8" color="White">
              find Stays
            </Typography>
          </Box>
        </Stack>
        <Stack sx={itemTwo}>
          <img src={Golobe} alt="" style={imageStyle} />
        </Stack>
        <Stack sx={itemThree}>
          <Button variant="text">Login</Button>
          <Button variant="contained" >Sigh up</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FirstPage;
