import { Stack } from "@mui/material";
import React from "react";
import Places from "../component/Places";
import FlightHotel from "../component/FlightHotel";
import HeadingTitle from "../component/HeadingTitle";
import Reviews from "../component/Reviews";

const FlightPlaces = () => {
  return (
    <Stack
      sx={{
        width: "1232px",
        margin: "0 auto",
        height: "549px",
      }}
    >
      <HeadingTitle
        title="Plan your perfect trip"
        subtitle={
          "Search Flights & Places Hire to our most popular destinations"
        }
        buttonText={"See more places"}
      />
      <Places />
      <FlightHotel />
      <Reviews />
    </Stack>
  );
};

export default FlightPlaces;
