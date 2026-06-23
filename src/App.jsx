import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  return (
  <div className="container">
    <Header />

    <h3>Total Tasks: {tasks.length}</h3>

<h3>
  Completed Tasks: {
    tasks.filter(task => task.completed).length
  }
</h3>

<h3>
  Pending Tasks: {
    tasks.filter(task => !task.completed).length
  }
</h3>

    <input
      type="text"
      placeholder="Enter Task"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />

    <button onClick={addTask}>
      Add Task
    </button>

    <ToDoList
      tasks={tasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  </div>
);
}

export default App;
