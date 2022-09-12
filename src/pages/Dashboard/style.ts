import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.625rem;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

    .div-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 480px) {
        max-width: 30rem;
        margin: 0 auto;
      }

      @media (min-width: 1000px) {
        max-width: 54.075rem;
      }
      button {
        padding: 0.5rem 1rem;
        background-color: var(--gray-3);
        color: var(--gray-5);
        transition: 0.5s;

        :hover {
          border-color: var(--gray-1);
        }
      }
    }
  }

  main {
    padding: 0 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 500px) {
      max-width: 500px;
      margin: 0 auto;
    }

    @media (min-width: 1000px) {
      flex-direction: row;
      gap: 2rem;
      max-width: unset;
    }

    .resumo-financeiro {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media (min-width: 500px) {
        justify-content: space-between;
      }

      h3 {
        font-weight: 700;
        font-size: 1rem;
        color: var(--gray-5);
      }
    }

    .container-buttons {
      display: flex;
      gap: 0.3rem;

      @media (min-width: 500px) {
        gap: 1rem;
      }

      button {
        padding: 0.5rem 0.3rem;
        max-width: 5ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: var(--pink-1);
        color: var(--white);
        border: 1px solid transparent;
      }

      button:focus {
        transition: 0.4s;
        background-color: var(--white);
        color: var(--pink-1);
        border-color: var(--pink-1);
      }

      @media (min-width: 310px) {
        button {
          max-width: unset;
        }
      }
    }

    .section-left {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }

    .valor-total {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border: 1px solid var(--gray-3);
      border-radius: 0.25rem;
      padding: 1rem;
      animation: valorTotal 1s;

      @keyframes valorTotal {
        0% {
          opacity: 0%;
        }
        100% {
          opacity: 100%;
        }
      }
    }

    .valor-total-children {
      display: flex;
      justify-content: space-between;

      h3 {
        font-weight: 700;
        font-size: 1rem;
      }

      span {
        font-weight: 700;
        font-size: 16px;
        color: var(--pink-1);
      }

      p {
        font-weight: 400;
        font-size: 0.75rem;
      }
    }
  }
`;
