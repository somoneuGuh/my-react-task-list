import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";

function Tareas() {
  // Define el estado para las tareas y una función para establecerlo
  const [tasks, setTasks] = useState([]);

  // Lógica para cargar tareas guardadas desde el almacenamiento local
  useEffect(() => {
    const savedTasks = localStorage.getItem("todo:savedTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Función para agregar una nueva tarea
  function addTask(taskTitle) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Guardar la tarea en el almacenamiento local
    localStorage.setItem(
      "todo:savedTasks",
      JSON.stringify([...tasks, newTask])
    );
  }

  // Función para eliminar una tarea por su ID
  function deleteTaskById(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    // Actualizar el almacenamiento local después de la eliminación
    localStorage.setItem("todo:savedTasks", JSON.stringify(updatedTasks));
  }

  // Función para cambiar el estado de una tarea a completado o no completado
  function toggleTaskCompletedById(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    // Actualizar el almacenamiento local después del cambio de estado
    localStorage.setItem("todo:savedTasks", JSON.stringify(updatedTasks));
  }

  return (
    <div>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  );
}

export default Tareas;
