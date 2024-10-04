import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useContext, useState } from "react";
import { ContextTask } from "../../../contexts/taskContext/TaskContext";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {
  DivDelete,
  DivEdit,
  DivText,
  DivCheckbox,
  DivTask,
} from "./StylesTask";

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
