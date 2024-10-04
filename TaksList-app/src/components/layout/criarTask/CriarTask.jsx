import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import useRequest from "../../../hooks/useRequest/useRequest";
import { ContextTask } from "../../../contexts/taskContext/TaskContext";

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

const CriarTask = () => {
  const [textCriarTask, setTextCriarTask] = useState("");
  const [textPesquisaTask, setTextPesquisaTask] = useState("");
  const { AdiconaTask, toggleIsAdd, isAdd } = useContext(ContextTask);

  return (
    <>
      {isAdd ? (
        <FormCriarTask
          onSubmit={(e) => {
            e.preventDefault();
            if (textCriarTask !== "") {
              AdiconaTask({ text: textCriarTask, checked: false });
              setTextCriarTask("");
            }
          }}
        >
          <input
            type="text"
            placeholder="Digite sua nova task"
            value={textCriarTask}
            onChange={(e) => setTextCriarTask(e.target.value)}
          />
          <button type="submit">Add</button>
          <button type="button" onClick={toggleIsAdd}>
            <IoSearchCircleSharp />
          </button>
        </FormCriarTask>
      ) : (
        <FormCriarTask>
          <input
            type="text"
            placeholder="Digite sua pesquisa"
            value={textPesquisaTask}
            onChange={(e) => setTextPesquisaTask(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={toggleIsAdd}>
            <IoMdAddCircle />
          </button>
        </FormCriarTask>
      )}
    </>
  );
};

export default CriarTask;
