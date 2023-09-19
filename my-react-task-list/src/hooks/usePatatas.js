import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export const usePatatas = () => {
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  };

  return {
    tasks,
    addTask,
    deleteTaskById,
    toggleTaskCompletedById,
  };
};
