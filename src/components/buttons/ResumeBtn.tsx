import { FC } from "react";
import { Button } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export const ResumeBtn: FC = () => {
  return (
    <Button
      variant="contained"
      color="addWorkBtn"
      disableElevation
      startIcon={<AttachFileIcon htmlColor="#1A3082" />}
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
        py: 1.5,
        borderRadius: "8px",
        textTransform: "none",
      }}
    >
      Subir CV
    </Button>
  );
};
