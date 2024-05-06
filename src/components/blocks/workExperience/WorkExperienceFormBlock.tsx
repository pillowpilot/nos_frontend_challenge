import { FC } from "react";
import { Box } from "@mui/material";
import { TextInput } from "../../inputs/TextInput";
import { DateInput } from "../../inputs/DateInput";
import { InputBlock } from "../InputBlock";

export type WorkExperienceFormBlockProps = {
  companyFormKey: string;
  positionFormKey: string;
  fromFormKey: string;
  toFormKey: string;
};

export const WorkExperienceFormBlock: FC<WorkExperienceFormBlockProps> = ({
  companyFormKey,
  positionFormKey,
  fromFormKey,
  toFormKey,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <InputBlock>
        <TextInput label="Empresa" formKey={companyFormKey} />
        <TextInput label="Cargo Ocupado" formKey={positionFormKey} />
        <DateInput label="Fecha desde" formKey={fromFormKey} />
        <DateInput label="Fecha hasta" formKey={toFormKey} />
      </InputBlock>
    </Box>
  );
};
