import styled from "styled-components";

export const ContainerDivSemTransacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-weight: 700;
    font-size: 1.375rem;
    color: var(--gray-5);
  }

  .container-svg {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;

    @media (min-width: 1000px) {
      width: 30rem;
    }

    img {
      width: 100%;
      border-radius: 0.25rem;
      animation: anyTransactions 1s;
    }

    @keyframes anyTransactions {
      0% {
        transform: translateX(250px);
      }
      50% {
        transform: translateX(-30px);
      }
      100% {
        transform: translateX(0px);
      }
    }
  }
`;
