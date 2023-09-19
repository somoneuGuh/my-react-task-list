import React from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { usePatatas } from "./hooks/usePatatas"; // Importa el custom hook

function App() {
  const { tasks, addTask, deleteTaskById, toggleTaskCompletedById } =
    usePatatas();

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export default App;
