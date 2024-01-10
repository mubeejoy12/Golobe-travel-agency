import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const Cards = ({ imageSrc, title, subtitle }) => {
  const cardImages = {
    width: "90px",
    height: "90px",
    backgroundImage: `url(${imageSrc})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <Card
      sx={{
        width: "389.33px",
        height: "122px",
        display: "flex",
        alignItems: "center",
        padding: "16px",
        borderRadius: "16pxx",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        direction={"row"}
        spacing={1}
      >
        <Stack sx={cardImages}></Stack>
        <Stack>
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{ fontWeight: "100" }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="initial"
            sx={{ lineHeight: "2" }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Cards;
