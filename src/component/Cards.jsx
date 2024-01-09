import { Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import instabulimg from "../assets/instabulimg.png";

const cardImages = {
  width: "90px",
  height: "90px",
  //   border: "2px solid brown",
  backgroundImage: `url(${instabulimg})`,
  backgroundImageRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Cards = () => {
  return (
    <Card>
      <Container maxWidth="xs">
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          direction={"row"}
          spacing={1}
        >
          <Stack sx={cardImages}></Stack>
          <Stack
            sx={{
              width: "251.33px",
              height: "45px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ fontWeight: "100" }}
            >
              instabul, turkey
            </Typography>
            <Typography variant="caption" color="initial">
              Flight . Hotel . Resorts
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Card>
  );
};

export default Cards;
