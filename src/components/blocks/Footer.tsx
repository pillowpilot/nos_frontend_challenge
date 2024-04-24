import { FC } from "react";
import { Box } from "@mui/material";
import { Logo } from "../logo/Logo";

export const Footer: FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#77a6f2",
      }}
    >
      <Logo />
    </Box>
  );
};
