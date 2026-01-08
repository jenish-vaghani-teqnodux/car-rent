import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioButton: React.FC<IRadioButtonProps> = ({
  label,
  value = "",
  ...props
}) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={value}
          control={<Radio {...props} />}
          label={label}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
