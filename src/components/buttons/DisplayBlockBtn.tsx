import { Button } from "@mui/material";
import { FC } from "react";

interface DisplayBlockBtnProps {
  label: string;
  onClick: () => void;
}

export const DisplayBlockBtn: FC<DisplayBlockBtnProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      disableElevation
      color="addWorkBtn"
      onClick={onClick}
      sx={{
        width: "100%",
        py: 0.7,
        px: 2,
        borderRadius: "8px",
        backgroundColor: "white",
        "&:hover": { backgroundColor: "white" },
      }}
    >
      {label}
    </Button>
  );
};
