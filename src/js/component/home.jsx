import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([])

  const url = "https://playground.4geeks.com/apis/fake/todos/user/fraanuni"  // Cuando se use la apicacion VERIFICAR SI EL USUARIO NO FUE ELIMINADO

  //Llamada a la API solo cuando se carga la pagina.
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setTasks(data)
      })
      .catch(err => console.log("err", err))
  }, []);

  const addTask = (event) => {
    if (event.key === "Enter") {
      setTasks([...tasks, { label: inputValue, done: false }])
      setInputValue("")
    };
  };
//Llamo a la API cada vez que se modifica mi lista de tareas
  useEffect(() => {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tasks)
    },)
      .then(resp => resp.json())
      .then(data => console.log("DATA", data))
      .catch(err => console.log("ERR", err))
  }, [tasks])



  const deleteTask = (event) => {
    let taskId = event.target.getAttribute("data-remove-id");
    if (taskId) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="cont container-fluid vh-100 d-flex justify-content-center">
      <div className="containerTodo bg-white m-auto p-5">
        <h1>List tasks</h1>
        <input type="text" placeholder="Add new tasks..." onKeyDown={addTask} onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
        <ul className="todolist my-3">
          {tasks.map((element) =>(
            <li className="container d-flex justify-content-between" key={element.id}>
              {element.label} <span><i className="fa fa-trash" onClick={deleteTask} data-remove-id={element.id}></i></span>
            </li>
          ))}
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
