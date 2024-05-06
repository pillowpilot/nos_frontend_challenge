import { FC, useReducer, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { AddBtn } from "../../buttons/AddBtn";
import { WorkExperienceFormBlock } from "./WorkExperienceFormBlock";
import { WorkExperienceDisplayBlock } from "./WorkExperienceDisplayBlock";
import { useFormContext } from "react-hook-form";
import { constructInitialState, workExperienceReducer } from "./reducers";

export const WorkExperienceBlock: FC = () => {
  const { getValues, unregister } = useFormContext();

  const [nextKey, setNextKey] = useState<number>(2);
  const [state, dispatch] = useReducer(
    workExperienceReducer,
    constructInitialState()
  );

  const presentText = (formKey: string) => {
    const value = getValues(formKey);
    if (value === undefined) return "Sin datos";
    else return value;
  };

  const presentDate = (formKey: string) => {
    const value = getValues(formKey);
    if (value === undefined) return "Sin datos";
    else return value.format("DD/MM/YYYY");
  };

  const buildOnEditHandler = (key: string) => {
    return () => {
      dispatch({
        type: "edit",
        payload: {
          keyToEdit: key,
        },
      });
    };
  };

  const buildOnSaveHandler = (key: string) => {
    return () => {
      dispatch({
        type: "save",
        payload: {
          keyToSave: key,
        },
      });
    };
  };

  const buildOnRemoveHandler = (key: string) => {
    return () => {
      unregister(`workExperience.${key}.company`);
      unregister(`workExperience.${key}.position`);
      unregister(`workExperience.${key}.from`);
      unregister(`workExperience.${key}.to`);

      dispatch({
        type: "remove",
        payload: {
          keyToRemove: key,
          nextKey: `${nextKey}`,
        },
      });
      setNextKey((prev) => prev + 1);
    };
  };

  const onAdd = () => {
    dispatch({
      type: "add",
      payload: {
        nextKey: `${nextKey}`,
      },
    });
    setNextKey((prev) => prev + 1);
  };

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
      {state.map((block) => {
        switch (block.type) {
          case "form": {
            return (
              <Stack key={`stack-${block.payload.key}`} gap={3}>
                <WorkExperienceFormBlock
                  key={block.payload.key}
                  companyFormKey={block.payload.companyFormKey}
                  positionFormKey={block.payload.positionFormKey}
                  fromFormKey={block.payload.fromFormKey}
                  toFormKey={block.payload.toFormKey}
                />
                <AddBtn
                  label="Guardar Experiencia"
                  onClick={buildOnSaveHandler(block.payload.key)}
                />
              </Stack>
            );
          }
          case "display": {
            const companyNameText = presentText(block.payload.companyFormKey);
            const positionText = presentText(block.payload.positionFormKey);
            const fromText = presentDate(block.payload.fromFormKey);
            const toText = presentDate(block.payload.toFormKey);
            return (
              <WorkExperienceDisplayBlock
                key={block.payload.key}
                companyName={companyNameText}
                position={positionText}
                from={fromText}
                to={toText}
                onRemove={buildOnRemoveHandler(block.payload.key)}
                onEdit={buildOnEditHandler(block.payload.key)}
              />
            );
          }
        }
      })}
      {state[state.length - 1].type === "display" ? (
        <AddBtn label="Agregar Experiencia" onClick={onAdd} />
      ) : (
        <></>
      )}
    </Stack>
  );
};
