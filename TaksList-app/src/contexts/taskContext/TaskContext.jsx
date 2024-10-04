import { createContext, useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest/useRequest";

const ContextTask = createContext();

const TaskContext = ({ children }) => {
  const [listaTasks, setListaTasks] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState("Todos");

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

  async function DeletarTask(id) {
    setListaTasks((beforeListaTask) => {
      const newlista = new Map(beforeListaTask);
      newlista.delete(id);
      return newlista;
    });

    await useRequest.DELETE(id);
  }

  async function AtualizarTask(id, updatedTask) {
    setListaTasks((beforeListaTask) => {
      const newListaTasks = new Map(beforeListaTask);
      newListaTasks.set(id, updatedTask);
      return newListaTasks;
    });
    await useRequest.PATCH(id, updatedTask);
  }

  async function PesquisarTasks(texto) {
    setIsLoading(true);
    const tasks = await useRequest.GETWithName(texto);
    setListaTasks(new Map(tasks.map((task) => [task._id, task])));
    setIsLoading(false);
  }

  async function FiltrarTasksChecadas(tipo) {
    setIsLoading(true);
    const tasks = await useRequest.GETWithChecked(tipo);
    setListaTasks(new Map(tasks.map((task) => [task._id, task])));
    setIsLoading(false);
  }

  function isChecado(e) {
    setChecked(e.target.value);
    if (e.target.value === "Checked") {
      FiltrarTasksChecadas(true);
      return;
    }
    if (e.target.value === "Nchecked") {
      FiltrarTasksChecadas(false);
      return;
    }
    PegaTasks();
  }

  useEffect(() => {
    PegaTasks();
  }, []);

  useEffect(() => {
    if (isAdd) {
      PegaTasks();
      setChecked("Todos");
    }
  }, [isAdd]);

  return (
    <ContextTask.Provider
      value={{
        listaTasks,
        AdiconaTask,
        PegaTasks,
        toggleIsAdd,
        isAdd,
        isLoading,
        DeletarTask,
        PesquisarTasks,
        AtualizarTask,
        FiltrarTasksChecadas,
        checked,
        isChecado,
      }}
    >
      {children}
    </ContextTask.Provider>
  );
};

export { TaskContext, ContextTask };
