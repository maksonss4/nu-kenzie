import { useContext } from "react";
import { AplicationContext } from "../../context";
import { Li, Ul } from "./style";
import { FaTrash } from "react-icons/fa";
import { DivSemTransacoes } from "../DivSemTransacoes";

export function Transacoes() {
  const { transacoes, removeValue, filterTransacoes } =
    useContext(AplicationContext);

  return filterTransacoes.length > 0 ? (
    <Ul>
      {filterTransacoes.map(({ description, type, value, id }) => {
        return (
          <Li type={type} key={id}>
            <div className="div-li-description">
              <h3>{description}</h3>
              <p>
                {parseInt(value).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <span>{type}</span>
            <button onClick={() => removeValue(id, value, type)} type="button">
              <FaTrash size={10} color={"var(--gray-5)"} />
            </button>
          </Li>
        );
      })}
    </Ul>
  ) : transacoes.length > 0 ? (
    <Ul>
      {transacoes.map(({ description, type, value, id }) => {
        return (
          <Li type={type} key={id}>
            <div className="div-li-description">
              <h3>{description}</h3>
              <p>
                {parseInt(value).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <span>{type}</span>
            <button onClick={() => removeValue(id, value, type)} type="button">
              <FaTrash size={10} color={"var(--gray-5)"} />
            </button>
          </Li>
        );
      })}
    </Ul>
  ) : (
    <DivSemTransacoes />
  );
}
