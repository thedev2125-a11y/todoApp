import React, { useState } from "react";
import "../App.css";

export default function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [errhandle, setErrhandle] = useState("");
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, {
        id: Date.now(),
        text: task.trim(),
        completed: false
      }]);
      setTask("");
    } else {
      setErrhandle("Please enter a task.");
    }
  };
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };
  const editTask = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const newTask = prompt("Edit the task:", todo.text);
    if(newTask === null) {
      return;
    }
    if (newTask.trim() === "") {
      setErrhandle("Task cannot be empty.");
      return;
    }
    if (newTask !== null) {
      const updatedTodos = [...todos];
      const index = updatedTodos.findIndex((todo) => todo.id === id);
      updatedTodos[index] = { ...updatedTodos[index], text: newTask.trim() };
      setTodos(updatedTodos);
    }
  };
  const checkbox = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };
  return (
    <div className="main">
      <div className="discription">
        <p>
          Every great achievement begins with a single task. Don't focus on how
          much is left to do-focus on the next step. stay consistent, trust the
          process, and remember: Motivation come and go, But{" "}
          <span className="discipline">Discipline always win the race!</span>
        </p>
      </div>
      <div className="listbar">
        <div className="card">
          <h3>My Daily Task</h3>
          <p className="title">Today is another opportunity to make progress.</p>
          <input
            className="inputtask"
            type="text"
            placeholder="Enter today's task..."
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
              setErrhandle("");
            }}
          />
          <button className="addtask" onClick={addTask}>
            Add task
          </button>
          {errhandle && <p className="error">{errhandle}</p>}
          <div>{
            todos.length === 0 ?
                (<p>Start by adding your first task.</p>)
                :(<div>
            {todos.map((todo, index) => (
              <div className={todo.completed ? "completed" : "tasks"} key={todo.id}>
                <p>
                  <span>{index + 1}.</span> {todo.text}{" "}
                </p>{" "}
                <span className="icons">
                  <button onClick={() => editTask(todo.id)}>✏️</button>
                  <button onClick={() => deleteTask(todo.id)}>🗑️</button>{" "}
                  <input  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkbox(todo.id)}
                  />
                </span>
              </div>
            ))}
            </div>)
}
          </div>
        </div>
      </div>
    </div>
  );
}
