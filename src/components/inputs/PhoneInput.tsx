import { Box, TextField, Typography } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { FC } from "react";

interface PhoneInputProps {
  label: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({ label }) => {
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
      <PatternFormat
        customInput={TextField}
        variant="outlined"
        sx={{
          ...setBorderStyles,
        }}
        // PatterFormat Props
        format="09## ### ###"
        allowEmptyFormatting
      />
    </Box>
  );
};
