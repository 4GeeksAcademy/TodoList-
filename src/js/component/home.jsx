import React, {useState} from "react";
import List from "./list"


//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState ('');
  const [task, setTask] = useState ([])
  
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
      <div className="containerTodo bg-white m-auto p-5 w-50">
        <h1>List tasks</h1>
        <input type="text" placeholder="Add new tasks..." onKeyDown={enterInput} onChange={(event) => setInputValue(event.target.value)} value={inputValue} />

        <ul className="todolist my-3">
					{task.map((element, index) => {
						return <List text={element} deleteTask={deleteTask} itemIndex={index}/>
					})}
				</ul>

        <div className="footer">
          {task.length} items left.
        </div>
      </div>
    </div>
  )};

export default Home;
