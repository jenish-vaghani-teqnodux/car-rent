import { TimePickerProps } from "@mui/x-date-pickers";

declare global {
  interface ITimePickerWrapperProps extends TimePickerProps {
    placeholder?: string;
  }
}
