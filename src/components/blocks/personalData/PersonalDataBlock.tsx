import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { TextInput } from "../../inputs/TextInput";
import { DateInput } from "../../inputs/DateInput";
import { PhoneInput } from "../../inputs/PhoneInput";
import { InputBlock } from "../InputBlock";

export const PersonalDataBlock: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: 3,
        borderColor: "#D0E0EE",
        borderWidth: "1px",
        borderBottomStyle: "solid",
      }}
    >
      <Typography variant="h2" align="left">
        Datos Personales
      </Typography>
      <InputBlock>
        <TextInput label="Nombre y Apellido" />
        <DateInput label="Fecha de Nacimiento" />
        <PhoneInput label="Número de Celular" />
      </InputBlock>
    </Box>
  );
};
