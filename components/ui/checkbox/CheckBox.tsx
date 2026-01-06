import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBox: React.FC<ICheckboxProps> = ({ label, ...props }) => {
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

export default CheckBox;
