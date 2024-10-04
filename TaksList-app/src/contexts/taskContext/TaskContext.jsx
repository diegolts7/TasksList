import { createContext, useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest/useRequest";

const ContextTask = createContext();

const TaskContext = ({ children }) => {
  const [listaTasks, setListaTasks] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function AdiconaTask(task) {
    setIsLoading(true);
    await useRequest.POST(task);
    await PegaTasks();
  }

  function toggleIsAdd() {
    setIsAdd((beforeIsAdd) => !beforeIsAdd);
  }

  async function PegaTasks() {
    setIsLoading(true);
    const tasks = await useRequest.GET();
    setListaTasks(new Map(tasks.map((task) => [task._id, task])));
    setIsLoading(false);
  }

  useEffect(() => {
    PegaTasks();
  }, []);

  return (
    <ContextTask.Provider
      value={{
        listaTasks,
        AdiconaTask,
        PegaTasks,
        toggleIsAdd,
        isAdd,
        isLoading,
      }}
    >
      {children}
    </ContextTask.Provider>
  );
};

export { TaskContext, ContextTask };
