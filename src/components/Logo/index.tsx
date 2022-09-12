import logoWhite from "../../assets/logo-white.svg";
import logoBlack from "../../assets/logo-black.svg";
import { ILogoProps } from "../../interfaces";
import { Figure } from "./style";

export function Logo({ page }: ILogoProps) {
  return (
    <Figure>
      <img src={page === "landingPage" ? logoWhite : logoBlack} alt="Logo" />
    </Figure>
  );
}
