import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import mailBox1 from "../assets/mailBox.png";
const Subfooter = () => {
  const mailBox = {
    width: "400px",
    height: "305px",
    backgroundImage: `url(${mailBox1})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <Stack
      sx={{
        width: "1232px",
        height: "305px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px 0 30px",
        backgroundColor: "#CDEAE1",
        position: "relative",
        top: 140,
        borderRadius: "20px",
      }}
      my={-2}
      direction={"row"}
    >
      <Stack spacing={1}>
        <Typography
          variant="h3"
          color="initial"
          sx={{ width: "364px", fontWeight: 700, fontSize: 44 }}
        >
          Subscribe Newsletter
        </Typography>

        <Typography variant="h5" color="initial" sx={{ fontSize: 20 }}>
          The Travel
        </Typography>
        <Typography variant="body2" color="initial" sx={{ fontSize: 14 }}>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <TextField
            sx={{ width: "473px", height: "56px", borderRadius: 4 }}
            id=""
            label="Your email address"
          />

          <Button
            variant="contained"
            sx={{
              width: "104px",
              height: "56px",
              backgroundColor: "#112211",
              fontSize: "12px",
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>

      <Stack sx={mailBox}></Stack>
    </Stack>
  );
};

export default Subfooter;
