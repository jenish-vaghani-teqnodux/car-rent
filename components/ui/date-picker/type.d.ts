import { DatePickerProps } from "@mui/x-date-pickers";

declare global {
  interface IDatePickerFieldProps extends DatePickerProps {
    placeholder?: string;
    onChange?: (value: Dayjs | null) => void;
  }
}
