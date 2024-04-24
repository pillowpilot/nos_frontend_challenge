import { FC } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddBtnProps {
  label: string;
  onClick: () => void;
}

export const AddBtn: FC<AddBtnProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      color="addWorkBtn"
      disableElevation
      endIcon={<AddIcon htmlColor="#1A3082" />}
      onClick={onClick}
      sx={{
        px: 2,
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "8px",
        textTransform: "none",
      }}
    >
      {label}
    </Button>
  );
};
