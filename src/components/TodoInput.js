import React, { useState } from "react";
import "./TodoInput.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      errorHandler();
      setInputText("");
    }
  };

  const errorHandler = () => {
    if (inputText.trim().length === 0) {
    } else {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="main">
      <div className="input_container">
        <input
          type="text"
          className="input_box_todo"
          placeholder="Enter your todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button className="add_btn" onClick={errorHandler}>
          <div className="btn">+</div>
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
