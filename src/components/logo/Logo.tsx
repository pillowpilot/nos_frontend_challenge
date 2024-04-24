import { FC } from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const Logo: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& .MuiTypography-root": {
          fontSize: "22px",
        },
      }}
    >
      <CircleIcon fontSize="large" htmlColor="#1a4282" />
      <Typography variant="h1">N</Typography>
      <Typography variant="h1" sx={{ color: "white" }}>
        test
      </Typography>
    </Box>
  );
};
