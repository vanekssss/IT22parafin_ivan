import { useState } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

import { TaskContext } from "./context/TaskContext";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      <div>
        <Header />
        <TaskForm />
        <TaskList />
        <Statistics />
        <Footer />
      </div>
    </TaskContext.Provider>
  );
}

export default App;