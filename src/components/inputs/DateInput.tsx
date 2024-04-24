import { Box, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { FC } from "react";

interface DateInputProps {
  label: string;
}

export const DateInput: FC<DateInputProps> = ({ label }) => {
  const setBorderStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
      borderWidth: "1px",
      borderColor: "#b9c8ff",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#b9c8ff !important",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography variant="h3" align="left">
        {label}
      </Typography>
      <DateField
        sx={{
          ...setBorderStyles,
        }}
      />
    </Box>
  );
};
