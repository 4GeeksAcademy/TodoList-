import React, {useState} from "react";
import list from "./list";

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
 
  )
    
};

export default Home;
