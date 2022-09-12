import { IButtonProps } from "../../interfaces";
import { ButtonStyled } from "./style";

export function Button({ text, click, type }: IButtonProps) {
  return (
    <ButtonStyled type={type} onClick={click}>
      {text}
    </ButtonStyled>
  );
}
