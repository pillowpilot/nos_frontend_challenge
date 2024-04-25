import { useState } from "react";
import {
  WorkExperienceFormBlock,
  WorkExperienceFormBlockProps,
} from "./WorkExperienceFormBlock";
import {
  WorkExperienceDisplayBlock,
  WorkExperienceDisplayBlockProps,
} from "./WorkExperienceDisplayBlock";

/**
 * Types definitions
 *
 * We use tagged Algebraic Data types to implement pattern matching properly
 * We also add the `key` field for rendering (to avoid the react unique key per component error)
 */
type DisplayBlockProps = {
  tag: "display"; // tag to Algebraic Data Type
  key: number;
} & WorkExperienceDisplayBlockProps;

type FormBlockProps = {
  tag: "form"; // tag to Algebraic Data Type
  key: number;
} & WorkExperienceFormBlockProps;

type BlockProps = DisplayBlockProps | FormBlockProps;

// Helper functions (irrelevant to main logic)
const extractRandomElement: <T>(options: T[]) => T = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const generateRandomCompanyName = () =>
  extractRandomElement(["Apple", "Microsoft", "Google", "Amazon"]);
const generateRandomPosition = () =>
  extractRandomElement(["CEO", "Engineer", "Especialist"]);

/**
 * Custom hook to handle work experience block extensibility
 *
 * Mantains a list of objects with type signatures extended from the components to render.
 * We add the fields tag for dispatching and key for the rendering process.
 *
 * handleAddAction is the on click event handler to update the list of props
 * props is the list of props that should be used for rendering
 *
 * @returns { handleAddAction, props }
 */
export const useExtensibleBlock = () => {
  const [props, setProps] = useState<BlockProps[]>([{ tag: "form", key: 1 }]);
  const [nextUniqueKey, setNextUniqueKey] = useState<number>(2);

  const handleAddAction = () => {
    const lastProp = props[props.length - 1];

    switch (lastProp.tag) {
      case "form":
        {
          const newDisplayFormProps: DisplayBlockProps = {
            tag: "display",
            key: nextUniqueKey,
            companyName: generateRandomCompanyName(),
            position: generateRandomPosition(),
            from: "01/02/1234",
            to: "01/02/5678",
            onRemove: () => {
              console.log(`TODO: Remove block with key ${nextUniqueKey}`);
            },
            onEdit: () => {
              console.log(`TODO: Edit block with key ${nextUniqueKey}`);
            },
          };
          const allPropsExceptLastOne = props.slice(0, props.length - 1);
          setProps([...allPropsExceptLastOne, newDisplayFormProps]);
        }
        break;
      case "display":
        setProps([...props, { tag: "form", key: nextUniqueKey }]);
        break;
      default:
        throw new Error(
          `Pattern Matching at useExtensibleBlock is not exhaustive!`
        );
    }
    setNextUniqueKey(nextUniqueKey + 1);
  };

  const renderBlocks = () => {
    // Pattern matching here to dispatch
    return props.map((prop) => {
      switch (prop.tag) {
        case "display":
          return <WorkExperienceDisplayBlock {...prop} />;
        case "form":
          return <WorkExperienceFormBlock {...prop} />;
        default:
          throw new Error(
            `Pattern Matching at useExtensibleBlock is not exhaustive!`
          );
      }
    });
  };

  return { handleAddAction, renderBlocks, props };
};