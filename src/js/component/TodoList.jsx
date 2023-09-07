import React from "react";

const TodoList = ({children}) => {
    return(
        <div className="containerList">
            {children}
        </div>
    )
};

export default TodoList;