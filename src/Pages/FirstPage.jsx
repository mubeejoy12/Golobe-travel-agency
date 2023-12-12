import React from "react";
import { Stack, Box } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     width: "1380px",
//     height: "599px",
//     border: "2px solid yellow",
//   },
// });

const containerStyle = {
  width: "1380px",
  height: "599px",
  border: "2px solid blue",
  margin: "0 auto"
};

const FirstPage = () => {
  //   const classes = useStyles()
  return <Stack sx={containerStyle}></Stack>;
};

export default FirstPage;
