import React from "react";

const list = (props) => {
    return(
        <li className="">
            {props.text} <span><i className="fa fa-trash" onClick={props.deleteItem} remove-id={props.itemIndex}></i></span>
        </li>
    )};

    export default list;