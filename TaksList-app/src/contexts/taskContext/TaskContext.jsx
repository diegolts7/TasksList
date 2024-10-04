import { createContext, useState } from "react";
import useRequest from "../../hooks/useRequest/useRequest";

const ContextTask = createContext();

const TaskContext = ({ children }) => {
  const [listaTasks, setListaTasks] = useState([]);
  const [isAdd, setIsAdd] = useState(true);

  async function AdiconaTask(task) {
    await useRequest.POST(task);
    await PegaTasks();
  }

  function toggleIsAdd() {
    setIsAdd((beforeIsAdd) => !beforeIsAdd);
  }

  async function PegaTasks() {
    const tasks = await useRequest.GET();
    setListaTasks(new Map(tasks.map((task) => [task._id, task.text])));
  }

  return (
    <ContextTask.Provider
      value={{ listaTasks, AdiconaTask, PegaTasks, toggleIsAdd, isAdd }}
    >
      {children}
    </ContextTask.Provider>
  );
};

export { TaskContext, ContextTask };
