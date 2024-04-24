import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface SimpleTextDisplayProps {
  title: string;
  subtitle: string;
}

export const SimpleTextDisplay: FC<SimpleTextDisplayProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Stack gap={0.5}>
      <Typography variant="h3" align="left">
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{
          color: "#464950",
        }}
      >
        {subtitle}
      </Typography>
    </Stack>
  );
};
