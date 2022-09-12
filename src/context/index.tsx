import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAplicationContext,
  IContextProviderProps,
  ITransacao,
} from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const AplicationContext = createContext({} as IAplicationContext);

export function ContextProvider({ children }: IContextProviderProps) {
  const [filterTransacoes, setFilterTransacoes] = useState([] as ITransacao[]);
  const [transacoes, setTransacoes] = useState([] as ITransacao[]);
  const [entradas, setEntradas] = useState([] as ITransacao[]);
  const [saidas, setSaidas] = useState([] as ITransacao[]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function goToDashboard() {
    setLoading(true);
    navigate("/dashboard", { replace: true });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  function goToLandingPage() {
    navigate("/landingpage", { replace: true });
  }

  function addValue(data: ITransacao) {
    data.id = uuidv4();

    setTransacoes([...transacoes, data]);

    data.type === "Entrada"
      ? setTotal(total + parseInt(data.value))
      : setTotal(total - parseInt(data.value));
  }

  function removeValue(id: string, valor: string, tipo: string) {
    setFilterTransacoes(
      filterTransacoes.filter((transacao) => transacao.id !== id)
    );

    setTransacoes(transacoes.filter((transacao) => transacao.id !== id));

    tipo === "Entrada"
      ? setTotal(total - parseInt(valor))
      : setTotal(total + parseInt(valor));
  }

  function filterEntradas() {
    setFilterTransacoes(
      transacoes.filter((transacao) => transacao.type === "Entrada")
    );
  }

  function filterSaidas() {
    setFilterTransacoes(
      transacoes.filter((transacao) => transacao.type === "Saída")
    );
  }

  function allTransacoes() {
    setFilterTransacoes([]);
  }

  return (
    <AplicationContext.Provider
      value={{
        goToDashboard,
        goToLandingPage,
        addValue,
        removeValue,
        filterTransacoes,
        transacoes,
        total,
        filterSaidas,
        filterEntradas,
        allTransacoes,
        loading,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
}
