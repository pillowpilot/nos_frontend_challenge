import { FC } from "react";
import { Box } from "@mui/material";
import { SubmitBtn } from "../buttons/SubmitBtn";

export const SubmitBlock: FC = () => {
  return (
    <Box
      sx={{
        py: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SubmitBtn />
    </Box>
  );
};
