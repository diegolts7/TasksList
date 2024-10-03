import styled from "styled-components";
import CriarTask from "../criarTask/CriarTask";

const DivCentralModalTasks = styled.div`
  background-color: #f8f8f8;
  min-height: 30vh;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  color: #1a1a6d;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ModalTasks = () => {
  return (
    <DivCentralModalTasks>
      <CriarTask />
    </DivCentralModalTasks>
  );
};

export default ModalTasks;
