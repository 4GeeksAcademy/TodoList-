import React, {useState} from "react";
import list from "./list";
import { element } from "prop-types";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState ('');
  const [tasks, setTakes] = useState ([]);
  
  const enterInput = (e) =>{
    if(e.key === "Enter" && inputValue){
      setTakes([...tasks, inputValue])
      setInputValue("")
    };
  };

  const deleteItem = (e) =>{
    let position = parseInt(e.target.getAtributte("remove-id"));
    setTakes(tasks.filter((index) => index !== position))
  };
  
  return(
    <div className="container">
      <h1>list tasks</h1>
      <input type="text" placeholder="Add new tasks..." onKeyDown={enterInput} onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>

      <ul className="todoList">
        {tasks.map((element, index) =>{
          return <list text={element} deleteItem={deleteItem} itemIndex={index} />
        })};
      </ul>

      <div className="footer">
        {tasks.length} items left.
      </div>
    </div>

  )};

export default Home;
