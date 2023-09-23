import React, {useState, useEffect} from "react";
import List from "./list"


//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState ('');
  const [task, setTask] = useState ([])
  const [tasks, setTasks] = useState ([])
  
  /*Hago una llamada a la api para que me traiga la informacion del usuario que yo le asigne*/ 
  useEffect (() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/fraanuni")
    .then(response => response.json())
    .then(data => setTasks(data))
    .catch(err => err)
  },[])

  /*Hago una llamada a la api para que modifique mi lista cada ver que agrege una nueva tarea*/
  


  const enterInput = (event) => {
    if(event.key === "Enter" && inputValue){
      setTask([...task, inputValue])
      setInputValue("")
    };
  };

  const deleteTask = (event) => {
		let position = parseInt(event.target.getAttribute("data-remove-id"));
		setTask(task.filter((item, index) => index !== position))
	};


  return(
    <div className="cont container-fluid vh-100 d-flex justify-content-center">
      <div className="containerTodo bg-white m-auto p-5">
        <h1>List tasks</h1>
        <input type="text" placeholder="Add new tasks..." onKeyDown={enterInput} onChange={(event) => setInputValue(event.target.value)} value={inputValue} />

        <ul className="todolist my-3">
					{tasks.map((element, index) => {
						return <List text={element.label} deleteTask={deleteTask} itemIndex={index}/>
					})}
				</ul>
        <div className="footer">
          {task.length} items left.
          <button className="text-end">Delete all list</button>
        </div>   
      </div>
    </div>
  )};

export default Home;
