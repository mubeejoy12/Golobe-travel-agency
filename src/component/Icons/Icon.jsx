import React from "react";

import * as Svgs from "./svgs/index";
import { capitalize } from "@mui/material";

const Icon = ({ iconName = "" }) => {
  const IcomComponent = Svgs[capitalize(iconName)];
  return <IcomComponent />;
};

export default Icon;
