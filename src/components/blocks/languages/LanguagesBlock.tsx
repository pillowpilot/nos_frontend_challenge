import { FC, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { LanguagesFormBlock } from "./LanguagesFormBlock";
import { LanguagesDisplayBlock } from "./LanguagesDisplayBlock";
import { AddBtn } from "../../buttons/AddBtn";

export const LanguagesBlock: FC = () => {
  const [displayLanguages, setDisplayLanguages] = useState<boolean>(false);

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
      <Typography variant="h2" align="left">
        Idiomas
      </Typography>

      {!displayLanguages ? (
        <LanguagesFormBlock />
      ) : (
        <LanguagesDisplayBlock
          language="Alemán"
          level="Avanzado"
          onRemove={() => setDisplayLanguages(false)}
          onEdit={() => setDisplayLanguages(false)}
        />
      )}

      <AddBtn
        label="Agregar Idioma"
        onClick={() => setDisplayLanguages(true)}
      />
    </Stack>
  );
};
