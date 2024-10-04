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
  gap: 2rem;
`;

const ModalTasks = () => {
  const { listaTasks, isLoading } = useContext(ContextTask);

  return (
    <DivCentralModalTasks>
      <CriarTask />
      <RenderizarTasks lista={listaTasks} isLoading={isLoading} />
    </DivCentralModalTasks>
  );
};

export default ModalTasks;
