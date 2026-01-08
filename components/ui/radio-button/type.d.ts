import { RadioProps } from "@mui/material";

declare global {
  interface IRadioButtonProps extends RadioProps {
    label: React.ReactNode;
    value: string | number;
  }
}
