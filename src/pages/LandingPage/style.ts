import styled from "styled-components";

export const ContainerLandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0.625rem;
  background-color: var(--gray-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0rem;

  @media (min-width: 400px) {
    align-items: center;
    justify-content: unset;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  max-width: 37.5rem;
  animation: animationOpac 1.5s;

  @keyframes animationOpac {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (min-width: 1000px) {
    width: 50%;
  }

  h2 {
    color: var(--white);
    font-weight: 800;
    font-size: 2.375rem;
    text-align: center;
  }

  p {
    color: var(--white);
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
  }

  button {
    color: var(--white);
    background-color: var(--pink-1);
    padding: 0.813rem 4rem;
    transition: 0.5s;

    :hover {
      border-color: var(--white);
    }
  }
`;

export const DivRight = styled.div`
  max-width: 37.5rem;
  animation: animationOpac 1.5s;

  @keyframes animationOpac {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;
