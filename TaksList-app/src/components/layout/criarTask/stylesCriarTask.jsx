import styled from "styled-components";

const FormCriarTask = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    width: 50vh;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    &:focus {
      outline: 1px solid #1a1a6d;
    }
  }
  button {
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: #1a1a6d;
    border: none;
    color: aliceblue;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    &:hover {
      background-color: #5a2d91;
      transition: 0.3s;
    }
    svg {
      font-size: 18px;
    }
  }
`;

export { FormCriarTask };
