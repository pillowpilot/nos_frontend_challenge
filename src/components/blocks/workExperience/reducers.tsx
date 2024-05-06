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
    companyFormKey: string;
    positionFormKey: string;
    fromFormKey: string;
    toFormKey: string;
  };
};

type DisplayState = {
  type: "display";
  payload: {
    key: string;
    companyFormKey: string;
    positionFormKey: string;
    fromFormKey: string;
    toFormKey: string;
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
    companyFormKey: `workExperience.${key}.company`,
    positionFormKey: `workExperience.${key}.position`,
    fromFormKey: `workExperience.${key}.from`,
    toFormKey: `workExperience.${key}.to`,
  },
});

export const constructInitialState = (): [FormState] => [
  {
    type: "form",
    payload: {
      key: "1",
      companyFormKey: "workExperience.1.company",
      positionFormKey: "workExperience.1.position",
      fromFormKey: "workExperience.1.from",
      toFormKey: "workExperience.1.to",
    },
  },
];

export const workExperienceReducer: Reducer<State, Action> = (
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
