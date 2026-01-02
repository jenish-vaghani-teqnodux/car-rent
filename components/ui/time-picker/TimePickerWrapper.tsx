import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const TimePickerWrapper: React.FC<ITimePickerWrapperProps> = ({
  placeholder,
  value,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={placeholder || "Select Time"}
        slotProps={{
          textField: {
            variant: "standard",
            size: "small",

            // ✅ REAL INPUT CONTROL HERE
            slotProps: {
              input: {
                sx: {
                  color: "var(--text-muted)",
                  WebkitTextFillColor: "var(--text-muted)",
                },
              },
            },

            // Label, icon, underline
            sx: {
              "& .MuiInputLabel-root": {
                color: "var(--text-muted)",
                fontSize: "12px",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--text-muted)",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "var(--text-muted)",
              },
            },
          },
        }}
        sx={{
          "& .MuiInputLabel-root": {
            fontSize: "12px",
          },
        }}
        value={value ?? null}
        className="w-full min-w-25!"
        {...props}
      />
    </LocalizationProvider>
  );
};

export default TimePickerWrapper;
