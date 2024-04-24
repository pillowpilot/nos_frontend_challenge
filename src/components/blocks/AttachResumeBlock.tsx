import { FC } from "react";
import { InputBlock } from "./InputBlock";
import { ResumeBtn } from "../buttons/ResumeBtn";
import { Stack, Typography } from "@mui/material";

export const AttachResumeBlock: FC = () => {
  return (
    <Stack
      sx={{
        py: 3,
        gap: 3,
        borderColor: "#D0E0EE",
        borderWidth: "1px",
        borderBottomStyle: "solid",
      }}
    >
      <Typography variant="h2">Adjuntar Archivo</Typography>
      <InputBlock>
        <></>
        <Typography variant="body1">
          (Formato Pdf o Word, peso máximo 10mb)
        </Typography>
      </InputBlock>
      <ResumeBtn />
    </Stack>
  );
};
