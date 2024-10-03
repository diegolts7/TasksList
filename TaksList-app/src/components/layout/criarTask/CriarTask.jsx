import styled from "styled-components";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

const FormCriarTask = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #1a1a6d;
    width: 50vh;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    &:focus {
      outline: 1px solid #5a2d91;
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
  const [isAdd, setIsAdd] = useState(true);

  function toggleIsAdd() {
    setIsAdd((beforeIsAdd) => (beforeIsAdd ? false : true));
  }

  return (
    <FormCriarTask>
      <input type="text" placeholder="digite sua task" />
      {isAdd ? (
        <>
          <button>Add </button>
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
