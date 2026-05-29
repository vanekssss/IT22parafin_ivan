function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>
        Виконано
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Видалити
      </button>
    </li>
  );
}

export default TaskItem;