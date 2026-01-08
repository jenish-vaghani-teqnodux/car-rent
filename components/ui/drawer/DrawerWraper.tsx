import { Drawer } from "@mui/material";
import React from "react";

const DrawerWraper: React.FC<IDrawerWraper> = ({ children, ...props }) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default DrawerWraper;
