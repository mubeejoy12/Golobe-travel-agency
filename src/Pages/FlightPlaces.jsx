import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Places from "../component/Places";
import FlightHotel from "../component/FlightHotel";

const FlightPlaces = () => {
  return (
    <Stack
      sx={{
        width: "1232px",
        margin: "0 auto",
        height: "549px",
      }}
    >
      <Stack
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
        }}
        direction={"row"}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h5" color="initial">
            Plan your perfect trip
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontWeight: "100", fontSize: "13px" }}
          >
            Search flight & places Hire to our most porpular destinations
          </Typography>
        </Stack>

        <Stack>
          <Button
            sx={{
              textTransform: "lowercase",
              margin: "auto 0",
              color: "black",
            }}
            variant="outlined"
            size="small"
          >
            See more places
          </Button>
        </Stack>
      </Stack>

      <Places />

      <FlightHotel />
    </Stack>
  );
};

export default FlightPlaces;
