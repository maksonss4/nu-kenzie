import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid var(--gray-3);
  border-radius: 0.25rem;

  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--gray-2);
    margin-bottom: 0.8rem;
  }

  label {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--gray-5);
    margin-bottom: 0.3rem;
  }

  input,
  select {
    background-color: var(--gray-4);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  input:focus {
    outline-color: var(--gray-1);
  }

  .container {
    display: flex;
    gap: 1rem;
  }

  .container-children {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  button {
    margin-top: 0.75rem;
    padding: 0.5rem;
    color: var(--white);
    background-color: var(--pink-1);
  }
`;
