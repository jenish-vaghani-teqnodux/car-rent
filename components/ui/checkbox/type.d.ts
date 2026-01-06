import { CheckboxProps } from "@mui/material";

declare global {
  interface ICheckboxProps extends CheckboxProps {
    label?: React.ReactNode;
  }
}
