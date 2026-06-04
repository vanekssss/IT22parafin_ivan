import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, toggleTask, deleteTask } =
    useContext(TaskContext);

  return (
    <div>
      <h2>Список задач</h2>

      {tasks.length === 0 ? (
        <p>Задач поки немає</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;