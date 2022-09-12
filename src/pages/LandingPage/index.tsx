import { useContext } from "react";
import { Button } from "../../components/Button";
import { DivAnimada } from "../../components/DivAnimadaLandingPage";
import { Logo } from "../../components/Logo";
import { AplicationContext } from "../../context";
import { ContainerLandingPage, DivLeft, DivRight } from "./style";

export function LandingPage() {
  const { goToDashboard } = useContext(AplicationContext);

  return (
    <ContainerLandingPage>
      <DivLeft>
        <Logo page="landingPage" />
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <Button type="button" click={goToDashboard} text="Iniciar" />
      </DivLeft>

      <DivRight>
        <DivAnimada />
      </DivRight>
    </ContainerLandingPage>
  );
}
