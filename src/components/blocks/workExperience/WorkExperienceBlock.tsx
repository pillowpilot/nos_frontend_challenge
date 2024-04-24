import { FC, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { WorkExperienceFormBlock } from "./WorkExperienceFormBlock";
import { WorkExperienceDisplayBlock } from "./WorkExperienceDisplayBlock";
import { AddBtn } from "../../buttons/AddBtn";

export const WorkExperienceBlock: FC = () => {
  const [displayWorkExperienceData, setDisplayWorkExperienceData] =
    useState<boolean>(false);

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
        Experiencia Laboral
      </Typography>

      {!displayWorkExperienceData ? (
        <WorkExperienceFormBlock />
      ) : (
        <WorkExperienceDisplayBlock
          companyName="Apple"
          position="CEO"
          from="01/02/1234"
          to="03/04/5678"
          onRemove={() => setDisplayWorkExperienceData(false)}
          onEdit={() => setDisplayWorkExperienceData(false)}
        />
      )}
      
      <AddBtn
        label="Agregar Experiencia"
        onClick={() => setDisplayWorkExperienceData(true)}
      />
    </Stack>
  );
};
