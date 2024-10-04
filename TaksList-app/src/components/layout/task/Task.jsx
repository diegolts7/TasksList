import styled from "styled-components";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useContext, useState } from "react";
import { ContextTask } from "../../../contexts/taskContext/TaskContext";
import { IoMdCloseCircleOutline } from "react-icons/io";

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

const Task = ({ task }) => {
  const { DeletarTask, AtualizarTask } = useContext(ContextTask);
  const [isEdit, setIsEdit] = useState(false);
  const [textAtualizaTask, setTextAtualizaTask] = useState("");
  async function atualizarTexto(e) {
    if (e.key === "Enter" && textAtualizaTask !== "") {
      toggleIsEdit();
      let updatedTask = { ...task };
      updatedTask.text = textAtualizaTask;
      await AtualizarTask(task._id, updatedTask);
    }
  }

  async function boxChecked(e) {
    let updatedTask = { ...task };
    updatedTask.checked = e.target.checked;
    await AtualizarTask(task._id, updatedTask);
  }

  function toggleIsEdit() {
    setIsEdit((before) => !before);
    setTextAtualizaTask("");
  }
  return (
    <DivTask checked={task.checked}>
      <DivCheckbox>
        <input type="checkbox" checked={task.checked} onChange={boxChecked} />
      </DivCheckbox>
      <DivText>
        {isEdit ? (
          <>
            <input
              type="text"
              value={textAtualizaTask}
              placeholder="Digite o novo texto aqui"
              onChange={(e) => setTextAtualizaTask(e.target.value)}
              onKeyDown={atualizarTexto}
            />
          </>
        ) : (
          <p onDoubleClick={toggleIsEdit}>{task.text}</p>
        )}
      </DivText>
      <DivEdit>
        {isEdit ? (
          <button onClick={toggleIsEdit}>
            <IoMdCloseCircleOutline />
          </button>
        ) : (
          <button onClick={toggleIsEdit}>
            <MdOutlineEdit />
          </button>
        )}
      </DivEdit>
      <DivDelete>
        <button onClick={async () => await DeletarTask(task._id)}>
          <MdDeleteOutline />
        </button>
      </DivDelete>
    </DivTask>
  );
};

export default Task;
