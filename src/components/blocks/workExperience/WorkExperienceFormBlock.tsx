import { FC } from "react";
import { Box } from "@mui/material";
import { TextInput } from "../../inputs/TextInput";
import { DateInput } from "../../inputs/DateInput";
import { InputBlock } from "../InputBlock";

export const WorkExperienceFormBlock: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <InputBlock>
        <TextInput label="Empresa" />
        <TextInput label="Cargo Ocupado" />
        <DateInput label="Fecha desde" />
        <DateInput label="Fecha hasta" />
      </InputBlock>
    </Box>
  );
};
