import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import useRequest from "../../../hooks/useRequest/useRequest";

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

const CriarTask = ({ setLista }) => {
  const [isAdd, setIsAdd] = useState(true);
  const [textTask, setTextTask] = useState("");

  function toggleIsAdd() {
    setIsAdd((beforeIsAdd) => (beforeIsAdd ? false : true));
  }

  async function addTask(e) {
    e.preventDefault();
    if (textTask.length > 0) {
      if (isAdd) {
        useRequest.POST({ text: textTask, checked: false });
        setTextTask("");
        setLista(useRequest.GET());

        return;
      }
      setLista(useRequest.GETWithName(textTask));
      return;
    }
    setLista(useRequest.GET());
  }

  return (
    <FormCriarTask onSubmit={addTask}>
      <input
        type="text"
        placeholder="digite sua task"
        value={textTask}
        onChange={(e) => setTextTask(e.target.value)}
      />
      {isAdd ? (
        <>
          <button type="submit">Add </button>
          <button onClick={toggleIsAdd}>
            <IoSearchCircleSharp />
          </button>
        </>
      ) : (
        <button onClick={toggleIsAdd}>
          <IoMdAddCircle />
        </button>
      )}
    </FormCriarTask>
  );
};

export default CriarTask;
