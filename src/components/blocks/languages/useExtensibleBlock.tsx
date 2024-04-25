import { useState, useEffect } from "react";
import {
  LanguagesDisplayBlock,
  LanguagesDisplayBlockProps,
} from "./LanguagesDisplayBlock";
import {
  LanguagesFormBlock,
  LanguagesFormBlockProps,
} from "./LanguagesFormBlock";

/**
 * Types definitions
 *
 * We use tagged Algebraic Data types to implement pattern matching properly
 * We also add the `key` field for rendering (to avoid the react unique key per component error)
 */
type DisplayBlockProps = {
  tag: "display"; // tag for Algebraic Data Type
  key: number;
} & LanguagesDisplayBlockProps;

type FormBlockProps = {
  tag: "form"; // tag for Algebraic Data Type
  key: number;
} & LanguagesFormBlockProps;

type BlockProps = DisplayBlockProps | FormBlockProps;

// Helper functions (irrelevant to main logic)
const extractRandomElement: <T>(options: T[]) => T = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const generateRandomLanguage = () =>
  extractRandomElement(["Español", "Inglés", "Portuges", "Aleman"]);
const generateRandomLevel = () =>
  extractRandomElement(["Básico", "Intermedio", "Avanzado"]);

/**
 * Custom hook to handle the language block extensibility
 *
 * Mantains a list of objects with type signatures extended from the components to render.
 * We add the fields `tag` for dispatching and `key` for the rendering process.
 *
 * handleAddAction is the on click event handler to update the list of props
 * props is the list of props that should be used for rendering
 *
 * @returns { handleAddAction, props }
 */
export const useExtensibleBlock = () => {
  const [props, setProps] = useState<BlockProps[]>([{ tag: "form", key: 1 }]);
  const [nextUniqueKey, setNextUniqueKey] = useState<number>(2);

  /**
   * In each callback (like onRemove) we will need to access an updated version of props
   * (see Stale State). There are several way to deal with it, one way is with useRef.
   *
   * Here we use a simple approach with useState and useEffect.
   *
   * First of all, we set an effect on each update of markedForRemove on the same level of props.
   *
   * We pass the setMarkedForRemove setter to each callback and went a callback
   * modifies markedForRemove it also triggers the removal effect.
   */
  const [markedForRemove, setMarkedForRemove] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    // Protect the effect form undefined
    if (markedForRemove) {
      // Make sure there is always at least one element
      if (props.length === 1) {
        setProps([{ tag: "form", key: nextUniqueKey }]);
        setNextUniqueKey(nextUniqueKey + 1);
      } else {
        setProps(props.filter((prop) => prop.key !== markedForRemove));
      }
      setMarkedForRemove(undefined);
    }
  }, [markedForRemove]);

  const handleAddAction = () => {
    const lastProp = props[props.length - 1];

    switch (lastProp.tag) {
      case "form":
        {
          const newDisplayFormProps: DisplayBlockProps = {
            tag: "display",
            key: nextUniqueKey,
            language: generateRandomLanguage(),
            level: generateRandomLevel(),
            onRemove: () => setMarkedForRemove(nextUniqueKey),
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
          return <LanguagesDisplayBlock {...prop} />;
        case "form":
          return <LanguagesFormBlock {...prop} />;
        default:
          throw new Error(
            `Pattern Matching at useExtensibleBlock is not exhaustive!`
          );
      }
    });
  };

  return { handleAddAction, renderBlocks, props };
};
