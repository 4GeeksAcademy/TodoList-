import React from "react";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Todo from "./Todo";
//create your first component

const Home = () => {
  
  return(
  <div className="container">
    <div>
      <Title />
      <TodoInput />
      <TodoList>
        <Todo />
      </TodoList>
    </div>
  </div>
  )
    
};

export default Home;
