import styled, { css } from "styled-components";
import { ILiProps } from "../../interfaces";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const Li = styled.li<ILiProps>`
  background-color: var(--gray-4);
  padding: 1rem;
  position: relative;
  border-radius: 0.25rem;
  max-width: 30rem;
  animation: liAnimation 1s;

  @keyframes liAnimation {
    0% {
      transform: translateX(150px);
    }
    50% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  @media (min-width: 500px) {
    width: 100vw;
  }

  ${({ type }) =>
    type === "Saída"
      ? css`
          border-left: 4px solid var(--gray-3);
        `
      : css`
          border-left: 4px solid var(--green);
        `}

  h3 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--gray-1);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-5);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-1);
    margin-right: 3rem;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    background-color: var(--gray-3);
  }

  .div-li-description {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
