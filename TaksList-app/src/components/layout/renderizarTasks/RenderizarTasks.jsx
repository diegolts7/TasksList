import { useEffect, useState } from "react";
import styled from "styled-components";
import Task from "../task/Task";
import Loading from "../../../assets/Rolling@1x-1.0s-200px-200px.svg";

const DivRenderizarTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 55vh;
  overflow-y: auto;
`;

const DivLOading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
  }
`;

const RenderizarTasks = ({ lista, isLoading }) => {
  const [listaArray, setListaArray] = useState([]);

  useEffect(() => {
    if (lista && lista.size > 0) {
      setListaArray(Array.from(lista.entries()));
      console.log(listaArray);
    } else {
      setListaArray([]);
    }
  }, [lista]);

  return (
    <DivRenderizarTasks>
      {isLoading ? (
        <DivLOading>
          <img src={Loading} alt="loading" />
        </DivLOading>
      ) : (
        <>
          {listaArray.length > 0 ? (
            listaArray.map(([id, task]) => <Task key={id} task={task} />)
          ) : (
            <p>sem resultados</p>
          )}
        </>
      )}
    </DivRenderizarTasks>
  );
};

export default RenderizarTasks;
