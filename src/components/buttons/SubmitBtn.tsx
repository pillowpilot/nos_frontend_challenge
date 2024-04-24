import { FC } from "react";
import { Button } from "@mui/material";

export const SubmitBtn: FC = () => {
  return (
    <Button
      variant="contained"
      disableElevation
      color="primary"
      sx={{
        px: 2,
        py: 1.5,
        backgroundColor: "#0d4bae",
        borderRadius: "8px",
        color: "white",
      }}
    >
      Postularme
    </Button>
  );
};
