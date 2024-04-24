import { FC } from "react";
import { FinalActionBtn } from "./FinalActionBtn";

interface AcceptBtnProps {
  onClick: () => void;
}

export const AcceptBtn: FC<AcceptBtnProps> = ({ onClick }) => {
  return <FinalActionBtn label="Aceptar" onClick={onClick} />;
};
