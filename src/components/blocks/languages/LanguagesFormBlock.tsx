import { Box } from "@mui/material";
import { FC } from "react";
import { CustomSelect } from "../../selects/CustomSelect";
import { InputBlock } from "../InputBlock";
import { useLanguageData } from "./useLanguageData";

export type LanguagesFormBlockProps = {
  languageFormKey: string;
  levelFormKey: string;
};

export const LanguagesFormBlock: FC<LanguagesFormBlockProps> = ({
  languageFormKey,
  levelFormKey,
}) => {
  const { languageOptions, levelOptions } = useLanguageData();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <InputBlock>
        <CustomSelect
          label="Idioma"
          formKey={languageFormKey}
          placeholder="Selecciona un Idioma"
          options={languageOptions}
        />
        <CustomSelect
          label="Nivel"
          formKey={levelFormKey}
          placeholder="Selecciona un Nivel"
          options={levelOptions}
        />
      </InputBlock>
    </Box>
  );
};
