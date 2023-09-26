import React, { useState, useEffect } from "react";
import List from "./list"


//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState([])

  const enterInput = (event) => {
    if (event.key === "Enter" && inputValue) {
      setTasks([...tasks, inputValue])
      setInputValue([])
    };
  };

  const deleteTask = (event) => {
    parseInt(event.target.getAttribute("data-remove-id"));
  };


  return (
    <div className="cont container-fluid vh-100 d-flex justify-content-center">
      <div className="containerTodo bg-white m-auto p-5">
        <h1>List tasks</h1>
        <input type="text" placeholder="Add new tasks..." onKeyDown={enterInput} onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
        <ul className="todolist my-3">
          {tasks.map((element, index) => {
            return <List text={element} deleteTask={deleteTask} itemIndex={index} />
          })}
        </ul>
        <div className="footer">
          <div>{tasks.length} items left.</div>
          <button className="">Delete all list</button>
        </div>
      </div>
    </div>
  )
};

export default Home;
