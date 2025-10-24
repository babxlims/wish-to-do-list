import { useState } from "react";
import "./App.css"; // opcional para estilização

interface Task {
  text: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Minha Wish To Do List</h1>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite sua tarefa"
          style={{ flex: 1, marginRight: "5px", padding: "5px" }}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleDone(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
