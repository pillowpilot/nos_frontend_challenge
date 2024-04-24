import { Box } from "@mui/material";
import { FC, ReactElement } from "react";

interface InputBlockProps {
  children?: ReactElement[];
}

export const InputBlock: FC<InputBlockProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      {children}
    </Box>
  );
};
