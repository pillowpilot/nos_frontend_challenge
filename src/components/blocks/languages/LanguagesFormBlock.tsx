import { Box } from "@mui/material";
import { FC } from "react";
import { CustomSelect } from "../../selects/CustomSelect";
import { InputBlock } from "../InputBlock";

export const LanguagesFormBlock: FC = () => {
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
          placeholder="Selecciona un Idioma"
          options={[
            {
              value: "es",
              label: "Español",
            },
            {
              value: "en",
              label: "Inglés",
            },
            {
              value: "pt",
              label: "Portugués",
            },
            {
              value: "de",
              label: "Alemán",
            },
          ]}
        />
        <CustomSelect
          label="Nivel"
          placeholder="Selecciona un Nivel"
          options={[
            {
              value: "basico",
              label: "Básico",
            },
            {
              value: "intermedio",
              label: "Intermedio",
            },
            {
              value: "avanzado",
              label: "Avanzado",
            },
          ]}
        />
      </InputBlock>
    </Box>
  );
};
