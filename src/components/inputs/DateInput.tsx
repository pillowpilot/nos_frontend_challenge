import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";
import { Box, Typography } from "@mui/material";

interface DateInputProps {
  label: string;
  formKey: string;
}

export const DateInput: FC<DateInputProps> = ({ label, formKey }) => {
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
        control={control}
        name={formKey}
        render={({ field }) => (
          <DateField {...field} sx={{ ...setBorderStyles }} format="DD/MM/YYYY"/>
        )}
      />
    </Box>
  );
};
