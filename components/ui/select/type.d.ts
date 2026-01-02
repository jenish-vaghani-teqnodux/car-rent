import { SelectProps } from "@mui/material/Select";

declare global {
  interface ISelectWrapperProps extends SelectProps {
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
  }
}
