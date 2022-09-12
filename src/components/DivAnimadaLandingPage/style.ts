import styled from "styled-components";

export const ContainerDivAnimada = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 200px;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 400px) {
    display: flex;
  }

  @media (min-width: 1000px) {
    top: unset;
    margin: unset;
  }

  .animacoes {
    position: absolute;
  }

  .animacao1 {
    width: 240px;
    z-index: 1;
    @media (min-width: 1000px) {
      width: 340px;
    }
  }

  .animacao2 {
    width: 290px;
    z-index: 2;

    @media (min-width: 1000px) {
      width: 390px;
    }
  }

  .animacao3 {
    width: 340px;
    z-index: 3;

    @media (min-width: 1000px) {
      width: 440px;
    }
  }

  .animacao4 {
    z-index: 4;
    height: 250px;

    @media (min-width: 1000px) {
      height: 310px;
    }
  }

  .animacao5 {
    height: 110px;
    top: -10px;
    left: -100px;
    z-index: 5;
    transition: 1s;
    animation: toRight 2s;

    @keyframes toRight {
      0% {
        transform: translateX(-100px);
      }
      50% {
        transform: translateX(20px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    :hover {
      transform: translate(30px, 20px);
    }

    @media (min-width: 1000px) {
      height: 120px;
      top: -20px;
      right: 60px;
      left: unset;
    }
  }

  .animacao6 {
    height: 130px;
    bottom: -25px;
    z-index: 6;
    transition: 1s;
    animation: toLeft 2s;

    @keyframes toLeft {
      0% {
        transform: translateX(100px);
      }
      50% {
        transform: translateX(-20px);
      }
      100% {
        transform: translateX(0px);
      }
    }

    :hover {
      transform: translate(-50px);
    }

    @media (min-width: 1000px) {
      height: 145px;
      top: -100px;
      right: 90px;
      bottom: unset;
    }
  }
`;
