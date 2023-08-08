
import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      errorHandler();
    }
  };

  const errorHandler = () => {
    if (inputText.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.addList(inputText);
      setInputText("");
    }
  };
  const yourStyle = {
    margin: "0",
    padding: "0",
    width: "100%",
  };
  const buttonStyle = {
    borderRadius: "50px",
    backgroundColor: "#1473E6",
    padding: "8px 0",
    margin: "10px  0",
    color: "white",
    width: "100%",
    border: "none",
  };
  const inputStyle = {
    backgroundColor: !isValid ? "red" : "transparent",
    borderRadius: "50px",
    padding: "15px 2%",
    margin: "0px",
    color: !isValid ? "white" : "black",
    width: "96%",
    border: "none",
  };
  const outputStyle = {
    width: "100%",
    color: "white",
    fontSize: "30px",
  };

  return (
    <div className="main">
      <div className="input_container" style={yourStyle}>
        <input
          type="text"
          className="input_box_todo"
          placeholder="Enter your todo"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
          onSubmit={errorHandler}
          style={inputStyle}
        />
        <button style={buttonStyle} className="add_btn" onClick={errorHandler}>
          <div style={outputStyle}>+</div>
        </button>
        {/* <div>{inputText}</div> */}
      </div>
    </div>
  );
}

export default TodoInput;
