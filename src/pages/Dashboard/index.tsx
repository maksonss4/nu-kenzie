import { useContext } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { Transacoes } from "../../components/Transacoes";
import { AplicationContext } from "../../context";
import { ContainerDashboard } from "./style";

export function Dashboard() {
  const {
    goToLandingPage,
    allTransacoes,
    filterEntradas,
    filterSaidas,
    transacoes,
    total,
    loading,
  } = useContext(AplicationContext);

  return loading ? (
    <Loading />
  ) : (
    <ContainerDashboard>
      <header>
        <div className="div-header">
          <Logo page="dashboard" />
          <Button type="button" text="Sair" click={goToLandingPage} />
        </div>
      </header>
      <main>
        <section className="section-left">
          <Form />
          {transacoes.length > 0 && (
            <div className="valor-total">
              <div className="valor-total-children">
                <h3>Valor total:</h3>
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <p>O valor se refere ao saldo</p>
            </div>
          )}
        </section>
        <section className="resumo-financeiro">
          <div className="menu">
            <h3>Resumo financeiro</h3>
            <div className="container-buttons">
              <Button text="Todas" type="button" click={allTransacoes} />
              <Button text="Entradas" type="button" click={filterEntradas} />
              <Button text="Saídas" type="button" click={filterSaidas} />
            </div>
          </div>
          <Transacoes />
        </section>
      </main>
    </ContainerDashboard>
  );
}
