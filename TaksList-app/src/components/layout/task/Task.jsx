import styled from "styled-components";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

const DivTask = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  border-radius: 5px;
  background: ${(props) =>
    props.checked
      ? "black"
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
`;

const DivEdit = styled.div`
  padding: 15px;
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    svg {
      color: #1a1a6d;
      font-size: 16px;
    }
  }
`;

const DivDelete = styled.div`
  padding: 15px;
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    svg {
      color: red;
      font-size: 16px;
    }
  }
`;

const Task = ({ task }) => {
  return (
    <DivTask checked={task.checked}>
      <DivCheckbox>
        <input type="checkbox" />
      </DivCheckbox>
      <DivText>{task.text}</DivText>
      <DivEdit>
        <button>
          <MdOutlineEdit />
        </button>
      </DivEdit>
      <DivDelete>
        <button>
          <MdDeleteOutline />
        </button>
      </DivDelete>
    </DivTask>
  );
};

export default Task;
