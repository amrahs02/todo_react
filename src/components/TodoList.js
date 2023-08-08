

import React from "react";

function TodoList(props) {
  const myStyle = {
    margin: "10px 0",
    width: '94%',
    backgroundColor: "white",
    // border: "2px solid black", // Fixed a typo in the border property value.
    borderRadius: "50px",
    overflow:"scroll",
    padding: "3%",
    display: "flex",
    justifyContent: "space-between",
  };

  const listItemStyle = {
    fontSize: "16px", // Default font size for larger screens.
  };

  // Responsive styles using media queries
  // Adjust font size for smaller screens
  const smallerScreens = `@media screen and (max-width: 576px) {
    li.list_item {
      font-size: 14px;
    }
  }`;

  return (
    <>
      <style>{smallerScreens}</style>
      <li className="list_item" style={{ ...myStyle, ...listItemStyle }}>
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
