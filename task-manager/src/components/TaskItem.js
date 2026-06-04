function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Видалити
      </button>
    </li>
  );
}

export default TaskItem;