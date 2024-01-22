import { Stack, Typography } from "@mui/material";
import React from "react";
import blackLogo from "../assets/BackGolobe.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/x.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const MainFooter = () => {
  const footerLogo = {
    width: "120px",
    height: "39.15px",
    backgroundImage: `url(${blackLogo})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid purple",
      }}
    >
      <Stack
        sx={{
          width: "1440px",
          height: "422px",
          backgroundColor: "#8DD3BB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            margin: "220px 0 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            width: "1232px",
          }}
          direction={"row"}
          spacing={4}
        >
          <Stack spacing={3}>
            <Stack sx={footerLogo}></Stack>
            <Stack direction={"row"} spacing={1}>
              <img
                src={facebook}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src={twitter}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src={instagram}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src={youtube}
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                Our Destination
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle2" color="initial">
                Canada
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Alaska
              </Typography>
              <Typography variant="subtitle2" color="initial">
                France
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Iceland
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                Our Destination
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle2" color="initial">
                Canada
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Alaska
              </Typography>
              <Typography variant="subtitle2" color="initial">
                France
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Iceland
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                Our Destination
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle2" color="initial">
                Canada
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Alaska
              </Typography>
              <Typography variant="subtitle2" color="initial">
                France
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Iceland
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                Our Destination
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle2" color="initial">
                Canada
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Alaska
              </Typography>
              <Typography variant="subtitle2" color="initial">
                France
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Iceland
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="subtitle1" color="initial">
                Our Destination
              </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle2" color="initial">
                Canada
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Alaska
              </Typography>
              <Typography variant="subtitle2" color="initial">
                France
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Iceland
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainFooter;
