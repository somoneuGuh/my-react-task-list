import styles from "./header.module.css";
import Logo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.length < 3) {
      setErrorMessage("Title must be at least 3 characters long");
      return;
    }

    onAddTask(title);
    setTitle("");
    setErrorMessage("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (errorMessage) {
     
      setErrorMessage("");
    }
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="add a new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <div className={styles.errorMessage}>
          {" "}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </div>
        <button>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
