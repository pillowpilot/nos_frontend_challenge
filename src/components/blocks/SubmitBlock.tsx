import { FC } from "react";
import { Box } from "@mui/material";
import { SubmitBtn } from "../buttons/SubmitBtn";

interface SubmitBlockProps {
  onSubmit: () => void;
}

export const SubmitBlock: FC<SubmitBlockProps> = ({ onSubmit }) => {
  return (
    <Box
      sx={{
        py: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SubmitBtn onSubmit={onSubmit} />
    </Box>
  );
};
