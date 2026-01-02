import { DrawerProps } from "@mui/material";

declare global {
  interface IDrawerWraper extends DrawerProps {
    children: React.ReactNode;
  }
}
