import { Container, Stack, Typography, TextField, Button } from "@mui/material";
import React from "react";
import mailBox1 from  "../assets/mailBox.png"
const Subfooter = () => {
    const mailBox = {
        width: "400px",
        height: "305",
        backgroundImage: `url(${mailBox1})`,
        backgroundImageRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
  return (
    <Stack
      sx={{ width: "1232px", height: "305px", border: "2px solid green", justifyContent: "space-between", padding: "0 15px 0 15px" }}
      my={2} direction={"row"}
    >
      <Stack>
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
            //   value={}
            //   onChange={}
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

      <Stack sx={mailBox}>

      </Stack>
    </Stack>
  );
};

export default Subfooter;
