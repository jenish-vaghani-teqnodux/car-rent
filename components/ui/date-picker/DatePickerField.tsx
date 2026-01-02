"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerField: React.FC<IDatePickerFieldProps> = ({
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={placeholder || "Date"}
        format="DD MMMM YYYY"
        value={value || null}
        onChange={onChange}
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
        className="w-full min-w-25!"
        {...props}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
