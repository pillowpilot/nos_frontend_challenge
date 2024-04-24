import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";

interface TextInputProps {
  label: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = ({ label, placeholder = "" }) => {
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
      <TextField
        variant="outlined"
        placeholder={placeholder}
        sx={{
          ...setBorderStyles,
        }}
      />
    </Box>
  );
};
