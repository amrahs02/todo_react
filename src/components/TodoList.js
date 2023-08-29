import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <>
      <li className="list_item">
        {props.item}
        <span className="icons">
          <i
            className="fa-solid fa-trash icon-delete"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </>
  );
}

export default TodoList;
