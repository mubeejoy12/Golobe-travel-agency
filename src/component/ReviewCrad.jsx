import { Button, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import GoogleIcon from "@mui/icons-material/Google";
const ReviewCrad = ({ reviewImage }) => {
  const ReviewImage = {
    width: "377px",
    height: "200px",
    backgroundImage: `url(${reviewImage})`,
    backgroundImageRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <Stack>
      <Card
        sx={{ width: "380px", height: "584px", border: "2px solid orange" }}
      >
        <Stack sx={{}}>
          <Container>
            <Typography
              variant="h5"
              color="initial"
              my={2}
              sx={{ fontSize: "22px", lineHeight: "30.31px" }}
            >
              “A real sense of community, nurtured”
            </Typography>

            <Stack>
              <Typography
                variant="subtitle2"
                color="black"
                sx={{ textAlign: "justify" }}
              >
                Really appreciate the help and support from the staff during
                these tough times. Shoutout to Katie for helping me always, even
                when I was out of the country. And always available when needed.
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

            <Stack direction="row" my={3}>
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
                Olga
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ fontSize: "14px", fontWeight: "light" }}
              >
                Weave Studios – Kai Tak
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
