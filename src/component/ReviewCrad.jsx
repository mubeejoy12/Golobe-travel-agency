import { Button, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "@mui/icons-material/Google";
import cloudOne from "../assets/cloudOne.png";

const ReviewCrad = ({ reviewImage, heading, subtile, name, location }) => {
  const ReviewImage = {
    width: "320px",
    height: "200px",
    backgroundImage: `url(${reviewImage})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "8px",
  };
  return (
    <Stack>
      <Card
        sx={{
          width: "380px",
          height: "590px",
            border: "2px solid orange",
          boxShadow: "30px 30px #8DD3BB ",
          mb: 4,
          borderRadius: "15px",
        }}
      >
        <Stack sx={{}}>
          <Container>
            <Typography
              variant="h5"
              color="initial"
              my={2}
              sx={{ fontSize: "22px", lineHeight: "30.31px" }}
            >
              {heading}
            </Typography>

            <Stack>
              <Typography
                variant="subtitle2"
                color="black"
                sx={{ textAlign: "justify" }}
              >
                {subtile}
              </Typography>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Button variant="text">View more</Button>
              </Stack>
            </Stack>

            <Stack direction="row" my={1}>
              <StarIcon sx={{ color: "#FFC107", width: "22.5px" }} />
              <StarIcon sx={{ color: "#FFC107", width: "22.5px" }} />
              <StarIcon sx={{ color: "#FFC107", width: "22.5px" }} />
              <StarIcon sx={{ color: "#FFC107", width: "22.5px" }} />
            </Stack>

            <Stack>
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ fontSize: "14px", fontWeight: "light" }}
              >
                {location}
              </Typography>
            </Stack>

            <Stack
              my={2}
              direction={"row"}
              sx={{ alignItems: "center" }}
              spacing={1}
            >
              {/* <Icon iconName="airplane"/> */}
              <GoogleIcon sx={{ fontSize: "15px" }} />
              <Typography variant="body2" color="initial">
                google
              </Typography>
            </Stack>

            <Stack sx={ReviewImage}></Stack>
          </Container>
        </Stack>
      </Card>
    </Stack>
  );
};

export default ReviewCrad;
