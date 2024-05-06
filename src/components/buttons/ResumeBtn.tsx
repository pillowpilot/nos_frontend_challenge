import { FC } from "react";
import { Button, styled } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Controller, useFormContext } from "react-hook-form";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ResumeBtn: FC = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="cvfile"
      control={control}
      render={({ field }) => {
        return (
          <Button
            variant="contained"
            color="addWorkBtn"
            disableElevation
            component="label"
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
            <VisuallyHiddenInput {...field} type="file" />
          </Button>
        );
      }}
    />
  );
};
