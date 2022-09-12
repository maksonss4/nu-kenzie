import { ContainerDivAnimada } from "./style";
import circulo from "../../assets/circulo.svg";
import groupRosa from "../../assets/group-rosa.svg";
import groupGreen from "../../assets/group-verde.svg";
import groupBig from "../../assets/group-big.svg";

export function DivAnimada() {
  return (
    <ContainerDivAnimada>
      <img className="animacao1 animacoes" src={circulo} alt="circulo" />
      <img className="animacao2 animacoes" src={circulo} alt="circulo" />
      <img className="animacao3 animacoes" src={circulo} alt="circulo" />
      <img className="animacao4 animacoes" src={groupBig} alt="circulo" />
      <img className="animacao5 animacoes" src={groupGreen} alt="circulo" />
      <img className="animacao6 animacoes" src={groupRosa} alt="circulo" />
    </ContainerDivAnimada>
  );
}
