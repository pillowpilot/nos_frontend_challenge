import { FC, ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import { SimpleTextDisplay } from "../../text/SimpleTextDisplay";
import { DisplayBlockBtn } from "../../buttons/DisplayBlockBtn";

interface RowWrapperProps {
  children: ReactElement;
}

const RowWrapper: FC<RowWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        px: 0,
        py: 2,
        borderWidth: "1px",
        borderColor: "#CDE2F4",
        borderBottomStyle: "solid",
      }}
    >
      {children}
    </Box>
  );
};

export type LanguagesDisplayBlockProps = {
  language: string;
  level: string;
  onRemove: () => void;
  onEdit: () => void;
}
export const LanguagesDisplayBlock: FC<LanguagesDisplayBlockProps> = ({
  language,
  level,
  onRemove,
  onEdit,
}) => {
  return (
    <Box
      sx={{
        padding: "10px 20px 30px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#e7f3fe",
        borderRadius: "10px",
      }}
    >
      <RowWrapper>
        <SimpleTextDisplay title="Idioma" subtitle={language} />
      </RowWrapper>
      <RowWrapper>
        <SimpleTextDisplay title="Nivel" subtitle={level} />
      </RowWrapper>
      <Grid container columns={2} spacing={1}>
        <Grid item xs={1}>
          <DisplayBlockBtn label="Eliminar" onClick={onRemove} />
        </Grid>
        <Grid item xs={1}>
          <DisplayBlockBtn label="Editar" onClick={onEdit} />
        </Grid>
      </Grid>
    </Box>
  );
};
