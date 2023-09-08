import React from "react";

const List = (props) => {
    
  return(
    <li className="container d-flex justify-content-between">
			{props.text} <span><i className="fa fa-trash" onClick={props.deleteTask} data-remove-id={props.itemIndex}></i></span> 
		</li>
  )};
 
  export default List;

  