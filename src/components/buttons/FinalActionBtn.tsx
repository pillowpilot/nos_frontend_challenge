import { FC } from "react";
import { Button } from "@mui/material";

interface FinalActionBtnProps {
  label: string;
  onClick?: () => void;
}

export const FinalActionBtn: FC<FinalActionBtnProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      color="primary"
      onClick={onClick}
      sx={{
        px: 2,
        py: 1.5,
        backgroundColor: "#0d4bae",
        borderRadius: "8px",
        color: "white",
      }}
    >
      {label}
    </Button>
  );
};
