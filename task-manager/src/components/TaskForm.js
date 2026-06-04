import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [task, setTask] = useState("");
  const inputRef = useRef();

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    addTask(task);

    setTask("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть задачу"
        value={task}
        ref={inputRef}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Додати</button>
    </form>
  );
}

export default TaskForm;