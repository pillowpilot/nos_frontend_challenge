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

interface WorkExperienceDisplayBlockProps {
  companyName: string;
  position: string;
  from: string;
  to: string;
  onRemove: () => void;
  onEdit: () => void;
}

export const WorkExperienceDisplayBlock: FC<
  WorkExperienceDisplayBlockProps
> = ({ companyName, position, from, to, onRemove, onEdit }) => {
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
        <SimpleTextDisplay
          title="Nombre de la Empresa"
          subtitle={companyName}
        />
      </RowWrapper>
      <RowWrapper>
        <SimpleTextDisplay title="Cargo Ocupado" subtitle={position} />
      </RowWrapper>
      <RowWrapper>
        <Grid container columns={2}>
          <Grid item xs={1}>
            <SimpleTextDisplay title="Desde" subtitle={from} />
          </Grid>
          <Grid item xs={1}>
            <SimpleTextDisplay title="Hasta" subtitle={to} />
          </Grid>
        </Grid>
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
