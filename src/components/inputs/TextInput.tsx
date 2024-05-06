import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
  label: string;
  formKey: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formKey
}) => {
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
        render={({field}) => {
          return (
            <TextField
              variant="outlined"
              {...field}
              sx={{
                ...setBorderStyles,
              }}
            />
          );
        }}
      />
    </Box>
  );
};
