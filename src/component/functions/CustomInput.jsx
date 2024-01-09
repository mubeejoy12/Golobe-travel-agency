import React from "react";
import BedIcon from "@mui/icons-material/Bed";


const CustomInput = () => {
  return (
    <div>
      <BedIcon {...props} />
      <Icon iconName="swap"
        style={{ position: "absolute", right: 10, top: 14, color: "#757575" }}
      />
    </div>
  );
};

export default CustomInput;
