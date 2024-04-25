import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { AddBtn } from "../../buttons/AddBtn";
import { useExtensibleBlock } from "./useExtensibleBlock";

export const LanguagesBlock: FC = () => {
  const { handleAddAction, renderBlocks } = useExtensibleBlock();

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

      {renderBlocks()}

      <AddBtn label="Agregar Idioma" onClick={handleAddAction} />
    </Stack>
  );
};
