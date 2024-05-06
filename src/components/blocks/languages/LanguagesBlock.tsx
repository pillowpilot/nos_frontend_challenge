import { FC, useReducer, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { AddBtn } from "../../buttons/AddBtn";
import { constructInitialState, languageReducer } from "./reducers";
import { LanguagesDisplayBlock } from "./LanguagesDisplayBlock";
import { LanguagesFormBlock } from "./LanguagesFormBlock";
import { useFormContext } from "react-hook-form";
import { useLanguageData } from "./useLanguageData";

export const LanguagesBlock: FC = () => {
  const methods = useFormContext();
  const { getLanguageLabel, getLevelLabel } = useLanguageData();
  const [nextKey, setNextKey] = useState<number>(2);

  const presentLanguage = (formKey: string): string => {
    const value = methods.getValues(formKey);
    if (value === undefined) return "Sin datos";
    const label = getLanguageLabel(value);
    if (label === undefined) return "Sin datos";
    else return label;
  };

  const presentLevel = (formKey: string): string => {
    const value = methods.getValues(formKey);
    if (value === undefined) return "Sin datos";
    const label = getLevelLabel(value);
    if (label === undefined) return "Sin datos";
    else return label;
  };

  const [state, dispatch] = useReducer(
    languageReducer,
    constructInitialState()
  );

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
      methods.unregister(`language.${key}.language`);
      methods.unregister(`language.${key}.level`);

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
    console.log("ll", methods.getValues());
    const lastBlock = state[state.length - 1];
    console.log(lastBlock);
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
        Idiomas
      </Typography>

      {state.map((block) => {
        switch (block.type) {
          case "display": {
            const languageText = presentLanguage(block.payload.languageFormKey);
            const levelText = presentLevel(block.payload.levelFormKey);
            return (
              <LanguagesDisplayBlock
                key={block.payload.key}
                language={languageText}
                level={levelText}
                onEdit={buildOnEditHandler(block.payload.key)}
                onRemove={buildOnRemoveHandler(block.payload.key)}
              />
            );
          }
          case "form": {
            return (
              <Stack key={`stack-${block.payload.key}`} gap={3}>
                <LanguagesFormBlock
                  key={block.payload.key}
                  languageFormKey={block.payload.languageFormKey}
                  levelFormKey={block.payload.levelFormKey}
                />
                <AddBtn
                  label="Agregar Idioma"
                  onClick={buildOnSaveHandler(block.payload.key)}
                />
              </Stack>
            );
          }
        }
      })}

      {state[state.length - 1].type === "display" ? (
        <AddBtn label="Agregar Idioma" onClick={onAdd} />
      ) : (
        <></>
      )}
    </Stack>
  );
};
