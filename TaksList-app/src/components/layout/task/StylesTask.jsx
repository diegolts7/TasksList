import styled from "styled-components";

const DivTask = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  border-radius: 5px;
  background: ${(props) =>
    props.checked
      ? "linear-gradient(135deg, rgba(100, 200, 100, 0.2), rgba(150, 255, 150, 0.3))"
      : "linear-gradient(135deg, rgba(60, 60, 120, 0.1), rgba(100, 100, 150, 0.2))"};
`;

const DivCheckbox = styled.div`
  padding: 15px;
`;

const DivText = styled.div`
  padding: 15px;
  text-align: justify;
  width: 80%;
  color: #5a2d91;
  font-weight: 450;
  input {
    border: none;
    text-align: center;
    outline: none;
    background-color: inherit;
    color: #5a2d91;
    width: 100%;
    font-size: 14px;
  }
`;

const DivEdit = styled.div`
  padding: 15px;

  button {
    background-color: inherit;
    border: none;

    svg {
      color: #1a1a6d;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const DivDelete = styled.div`
  padding: 15px;

  button {
    background-color: inherit;
    border: none;

    svg {
      color: red;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export { DivDelete, DivEdit, DivText, DivCheckbox, DivTask };
