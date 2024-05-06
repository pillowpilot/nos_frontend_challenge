import { Box, TextField, Typography } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface PhoneInputProps {
  label: string;
  formKey: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({ label, formKey }) => {
  const { control } = useFormContext();

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
      <Controller
        name={formKey}
        control={control}
        render={({ field }) => {
          return (
            <PatternFormat
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              customInput={TextField}
              variant="outlined"
              sx={{
                ...setBorderStyles,
              }}
              // PatterFormat Props
              format="09## ### ###"
              allowEmptyFormatting
            />
          );
        }}
      />
    </Box>
  );
};
