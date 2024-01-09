import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Places from "../component/Places";

const FlightPlaces = () => {
  return (
    <Stack
      sx={{
        width: "1232px",
        border: "2px solid yellow",
        margin: "0 auto",
        height: "549px",
      }}
    >
      <Stack
        sx={{
          height: "70px",
          //   border: "2px solid purple",
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
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
    </Stack>
  );
};

export default FlightPlaces;
