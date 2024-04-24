import { FC } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface LanguageOption {
  value: string;
  label: string;
}

interface LanguageSelectProps {
  label: string;
  placeholder: string;
  options: LanguageOption[];
}

export const CustomSelect: FC<LanguageSelectProps> = ({
  label,
  placeholder,
  options,
}) => {
  const findLabel = (value: string): string | undefined => {
    const option: LanguageOption | undefined = options.find(
      (option) => option.value === value
    );
    return option ? option.label : undefined;
  };

  const disableDropdownPadding = {
    MenuProps: {
      MenuListProps: {
        disablePadding: true,
      },
    },
  };

  const setIconColor = {
    "& .MuiSelect-icon": {
      color: "#1A3082",
    },
  };

  const setBorderStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
      borderColor: "#7791F2",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderRadius: "8px",
      borderColor: "#7791F2",
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
      <Select
        fullWidth
        defaultValue=""
        displayEmpty
        {...disableDropdownPadding}
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          ...setBorderStyles,
          ...setIconColor,
        }}
        renderValue={(value) => {
          return value !== "" ? (
            <Typography variant="body2">{findLabel(value)}</Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "#C1C1C1",
              }}
            >
              {placeholder}
            </Typography>
          );
        }}
      >
        {options.map((option: LanguageOption) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              py: "17px",
              px: "20px",
              borderColor: "#EEEEEE",
              borderBottomStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <Typography variant="body2">{option.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
