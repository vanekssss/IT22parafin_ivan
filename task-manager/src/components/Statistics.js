import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Statistics() {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const uncompleted = tasks.length - completed;

  return (
    <div>
      <h2>Статистика</h2>

      <p>Всього задач: {tasks.length}</p>
      <p>Виконаних: {completed}</p>
      <p>Невиконаних: {uncompleted}</p>
    </div>
  );
}

export default Statistics;