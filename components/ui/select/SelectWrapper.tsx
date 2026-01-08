"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectWrapper = ({
  placeholder = "Select",
  options = [],
  value = "",
  onChange,
  ...props
}: ISelectWrapperProps) => {
  return (
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      sx={{
        "& .MuiInputLabel-root": {
          fontSize: "12px",
        },
      }}
      className="min-w-25!"
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color: "var(--text-muted)",
        }}
      >
        {placeholder}
      </InputLabel>
      <Select
        label={placeholder}
        value={value}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
        sx={{
          "& .MuiSelect-select": {
            color: "var(--text-muted)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--text-muted)",
          },
        }}
        {...props}
      >
        {options.map((option: { value: string; label: string }) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectWrapper;
