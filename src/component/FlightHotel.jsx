import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import flight from "../assets/flight.png";
import hotel from "../assets/Hotels.png";
import SendIcon from "@mui/icons-material/Send";

const FlightHotel = () => {
  const BookFlight = {
    width: "604px",
    height: "559px",
    border: " 2px solid purple",
    backgroundImage: `url(${flight})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const BookHotel = {
    width: "604px",
    height: "559px",
    border: " 2px solid purple",
    backgroundImage: `url(${hotel})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <Stack
      sx={{ width: "1232px", height: "559px", border: "2px solid purple" }}
      my={2}
      direction={"row"}
      spacing={2}
    >
      <Stack sx={BookFlight}>
        <Stack mt="auto" sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3" color="white" textAlign="center">
            Flights
          </Typography>
          <Typography
            variant="body1"
            color="white"
            textAlign="center"
            sx={{ width: "389px", margin: "0 auto" }}
          >
            search your flights & Places Hire to our most popular destination
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, width: "144px", height: "48px" }}
          >
            <SendIcon />
            Show Flights
          </Button>
        </Stack>
      </Stack>
      <Stack sx={BookHotel}>
        <Stack mt="auto" sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3" color="white" textAlign="center">
            Hotels
          </Typography>
          <Typography
            variant="body1"
            color="white"
            textAlign="center"
            sx={{ width: "389px", margin: "0 auto" }}
          >
            search your flights & Places Hire to our most popular destination
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              mb: 2,
              width: "144px",
              height: "48px",
            }}
            small="true"
          >
            <SendIcon sx={{ width: "15px" }} />
            Show Hotels
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FlightHotel;
