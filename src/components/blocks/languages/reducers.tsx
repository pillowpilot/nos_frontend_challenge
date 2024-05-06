import { Reducer } from "react";

type AddAction = {
  type: "add";
  payload: {
    nextKey: string;
  };
};

type RemoveAction = {
  type: "remove";
  payload: {
    nextKey: string;
    keyToRemove: string;
  };
};

type EditAction = {
  type: "edit";
  payload: {
    keyToEdit: string;
  };
};

type SaveAction = {
  type: "save";
  payload: {
    keyToSave: string;
  };
};

type Action = AddAction | RemoveAction | EditAction | SaveAction;

type FormState = {
  type: "form";
  payload: {
    key: string;
    languageFormKey: string;
    levelFormKey: string;
  };
};

type DisplayState = {
  type: "display";
  payload: {
    key: string;
    languageFormKey: string;
    levelFormKey: string;
  };
};

type State = (FormState | DisplayState)[];

const formStateToDisplayState = (formState: FormState): DisplayState => ({
  ...formState,
  type: "display",
});

const displayStateToFormState = (displayState: DisplayState): FormState => ({
  ...displayState,
  type: "form",
});

const constructFormState = (key: string): FormState => ({
  type: "form",
  payload: {
    key: key,
    languageFormKey: `language.${key}.language`,
    levelFormKey: `language.${key}.level`,
  },
});

export const constructInitialState = (): [FormState] => [
  {
    type: "form",
    payload: {
      key: "1",
      languageFormKey: "language.1.language",
      levelFormKey: "language.1.level",
    },
  },
];

export const languageReducer: Reducer<State, Action> = (
  blocks: State,
  action: Action
) => {
  switch (action.type) {
    case "add": {
      const lastElement = blocks[blocks.length - 1];
      if (lastElement.type === "display")
        return [...blocks, constructFormState(action.payload.nextKey)];
      else {
        const newElement = formStateToDisplayState(lastElement);
        newElement.payload.key = action.payload.nextKey;
        
        return [...blocks.slice(0, -1), newElement];
      }
    }
    case "remove": {
      if (blocks.length > 1)
        return blocks.filter(
          (block) => block.payload.key !== action.payload.keyToRemove
        );
      return [constructFormState(action.payload.nextKey)];
    }
    case "edit": {
      return blocks.map((block) =>
        block.type === "display" &&
        block.payload.key === action.payload.keyToEdit
          ? displayStateToFormState(block)
          : block
      );
    }
    case "save": {
      return blocks.map((block) =>
        block.type === "form" && block.payload.key === action.payload.keyToSave
          ? formStateToDisplayState(block)
          : block
      );
    }
  }
};
