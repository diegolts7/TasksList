import styled from "styled-components";
import CriarTask from "../criarTask/CriarTask";
import RenderizarTasks from "../renderizarTasks/RenderizarTasks";
import { ContextTask } from "../../../contexts/taskContext/TaskContext";
import { useContext } from "react";

const DivCentralModalTasks = styled.div`
  background-color: #f8f8f8;
  min-height: 45vh;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  color: #1a1a6d;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DivInfoFiltro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  label {
    color: black;
    font-size: 12px;
  }
  select {
    background-color: inherit;

    color: #1a1a6d;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 12px;
  }
`;

const ModalTasks = () => {
  const { listaTasks, isLoading } = useContext(ContextTask);

  function isChecado(){
    
  }

  return (
    <DivCentralModalTasks>
      <CriarTask />
      <DivInfoFiltro>
        <label>Filtrar por:</label>
        <select onChange={}>
          <option value="Todos">Todos</option>
          <option value="Checked">Checados</option>
        </select>
      </DivInfoFiltro>
      <RenderizarTasks lista={listaTasks} isLoading={isLoading} />
    </DivCentralModalTasks>
  );
};

export default ModalTasks;
