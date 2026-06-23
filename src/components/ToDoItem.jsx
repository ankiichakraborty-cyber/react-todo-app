function ToDoItem({
  task,
  toggleComplete,
  deleteTask,
  editTask
}) {
  return (
    <li>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() => {
          const newText = prompt(
            "Edit Task",
            task.text
          );

          if (newText) {
            editTask(task.id, newText);
          }
        }}
      >
        Edit
      </button>

      <button
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;