import React, { useState } from "react";
import "../App.css";

export default function Home() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const addtask = () => {
        if(task.trim() == "") {
            alert("Please enter a task!");
        } else {
            setTodos([...todos, task]);
            setTask("");
        }
    };
  return (
    <div className="main">
      <div className="discription">
        <p>
            Every great achievement begins with a single task. Don't focus on how much is left to do-focus on the next step. stay consistent, trust the process, and remember: Motivation come and go, But <span className="discipline">Discipline always win the race!</span>
        </p>
      </div>
      <div className="listbar">
        <div className="card">
        <h3>My Daily Task</h3>
        <p>Today is another opportunity to make progress.</p>
        <input
        className="inputtask" 
          type="text" 
          placeholder="Enter today's task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addtask" onClick={addtask}>Add task</button>
        <div>
            {/* display the list of tasks here */}
            {todos.map((todo,index) => (
                <div className="tasks">
                    <p>{todo} </p> <span className="icons"><button>✏️</button><button >🗑️</button> <input type="checkbox"/></span>
                </div>
            ))}
            
        </div>
        </div>
      </div>
    </div>
  );
}
