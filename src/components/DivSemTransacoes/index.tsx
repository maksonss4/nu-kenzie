import { ContainerDivSemTransacoes } from "./style";
import semTransacoes from "../../assets/sem-transacoes.svg";

export function DivSemTransacoes() {
  return (
    <ContainerDivSemTransacoes>
      <h3>Você ainda não possui nenhum lançamento</h3>
      <div className="container-svg">
        <img src={semTransacoes} alt="Sem transações" />
        <img src={semTransacoes} alt="Sem transações" />
        <img src={semTransacoes} alt="Sem transações" />
      </div>
    </ContainerDivSemTransacoes>
  );
}
