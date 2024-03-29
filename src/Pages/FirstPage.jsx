import React from "react";
import { Stack, Box, Typography, Button, TextField } from "@mui/material";
import globeImage from "../assets/Rectangle.png";
import BedIcon from "@mui/icons-material/Bed";
import Golobe from "../assets/golobeicon.png";
import Icon from "../component/Icons/Icon";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SendIcon from "@mui/icons-material/Send";
import FlightPlaces from "./FlightPlaces";

const containerStyle = {
  width: "1380px",
  height: "599px",
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
  marginTop: "20px",
  height: "96px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  margin: "0px 30px 0px 30px",
};
const itemOne = {
  width: "242px",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
};
const itemTwo = {
  with: "100px",
};
const itemThree = {
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

const middleTypo = {
  marginTop: "60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};
const FirstPage = () => {
  return (
    <>
      <Stack sx={{ backgroundColor: "#F8FAFB" }}>
        <Stack sx={containerStyle}>
          <Stack sx={navBar}>
            <Stack sx={itemOne}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <Icon iconName="airplane" />
                <Typography variant="h9" color="White">
                  find Flight
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
                <BedIcon sx={secondIcon} />
                <Typography variant="h8" color="white">
                  find Stays
                </Typography>
              </Box>
            </Stack>
            <Stack sx={itemTwo}>
              <img src={Golobe} alt="" style={imageStyle} />
            </Stack>
            <Stack sx={itemThree}>
              <Button variant="text" sx={{ color: "white", fontSize: "12px" }}>
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "10px",
                }}
              >
                Sigh up
              </Button>
            </Stack>
          </Stack>

          <Stack sx={middleTypo}>
            <Typography variant="h3" color="white">
              Helping Others
            </Typography>
            <Typography variant="h1" color="white">
              LIVE & TRAVEL
            </Typography>
            <Typography variant="h6" color="white">
              Special offer to suit your plan
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          spacing={4}
          sx={{
            // border: "2px solid yellow",
            height: "240px",
            borderRadius: "16px",
            width: "1232px",
            position: "relative",
            top: "-100px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "40px 0 0 20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            sx={{
              // border: "2px solid green",
              // marginTop: "15px",
              display: "flex",
              flexDirection: "row",

              // backgroundColor: "brown",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Icon iconName="secondp" />
              <Typography variant="h10" color="black">
                Flights
              </Typography>
            </Stack>

            <Stack
              sx={{
                borderLeft: "2px solid #D7E2EE",
                height: "30px",
                marginLeft: "20px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "10px",
                  gap: "5px",
                }}
              >
                <Icon iconName="bed" />
                <Typography variant="h10" color="black">
                  Stays
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Box
              component={"form"}
              sx={{
                height: "50px",
                display: "flex",
                flexDirection: "row",
                gap: "45px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="From-To"
                variant="outlined"
                size="small"
                sx={{ width: "320px" }}
                InputProps={{
                  endAdornment: <SwapHorizIcon className="custom-icon" />,
                }}
              />

              <TextField
                id="outlined-basic"
                label="Trip"
                variant="outlined"
                size="small"
                sx={{ width: "100px" }}
                // InputProps={{
                //   endAdornment: <SwapHorizIcon className="custom-icon" />,
                // }}
              />

              <TextField
                id="outlined-basic"
                label="Depart-Return"
                variant="outlined"
                size="small"
                sx={{ width: "320px" }}
                // InputProps={{
                //   endAdornment: <SwapHorizIcon className="custom-icon" />,
                // }}
              />

              <TextField
                id="outlined-basic"
                label="Passanger-Class"
                variant="outlined"
                size="small"
                sx={{ width: "320px" }}
                // InputProps={{
                //   endAdornment: <SwapHorizIcon className="custom-icon" />,
                // }}
              />
            </Box>
          </Stack>
          <Stack
            sx={{
              // border: "2px solid orange",
              height: "48px",
              paddingRight: "10px",
              justifyContent: "flex-end",
            }}
            direction={"row"}
          >
            <Button variant="text" sx={{ fontSize: "7px" }}>
              + Add Promo Code
            </Button>
            <Button variant="contained" sx={{ fontSize: "8px" }}>
              {" "}
              <SendIcon sx={{ width: "12px", marginRight: "5px" }} />
              Show flight
            </Button>
          </Stack>
        </Stack>

        <FlightPlaces />
      </Stack>
    </>
  );
};

export default FirstPage;
