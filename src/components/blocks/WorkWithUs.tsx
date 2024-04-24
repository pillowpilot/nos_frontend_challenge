import { FC } from "react";
import { Box, Typography } from "@mui/material";

export const WorkWithUs: FC = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        backgroundColor: "#e7f3fe"
      }}
    >
      <Typography variant="h1" align="left">
        Trabajá con nosotros
      </Typography>
      <Typography variant="body1" align="left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        ad?
      </Typography>
    </Box>
  );
};
