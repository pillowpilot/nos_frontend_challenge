import { FC } from "react";
import { FinalActionBtn } from "./FinalActionBtn";

interface SubmitBtnProps {
  onSubmit: () => void;
}

export const SubmitBtn: FC<SubmitBtnProps> = ({ onSubmit }) => {
  return <FinalActionBtn label="Postularme" onClick={onSubmit} />;
};
