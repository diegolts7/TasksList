import { IoSearchCircleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { useContext, useState } from "react";

import { ContextTask } from "../../../contexts/taskContext/TaskContext";
import { FormCriarTask } from "./StylesCriarTask";

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
