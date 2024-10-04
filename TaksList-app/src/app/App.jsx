import ModalTasks from "../components/layout/modalTasks/ModalTasks";
import { TaskContext } from "../contexts/taskContext/TaskContext";

import "./App.css";

function App() {
  return (
    <TaskContext>
      <div className="conteiner">
        <ModalTasks />
      </div>
    </TaskContext>
  );
}

export default App;
