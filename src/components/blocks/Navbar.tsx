import { FC } from "react";
import { Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from "../logo/Logo";

export const Navbar: FC = () => {
  return (
    <Box
      sx={{
        py: 1.5,
        px: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#77a6f2",
      }}
    >
      <Logo />
      <MenuIcon fontSize="large" htmlColor="#1a4282" />
    </Box>
  );
};
