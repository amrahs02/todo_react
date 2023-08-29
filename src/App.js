import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const getLocalItems = () => {
    let list = localStorage.getItem("list");
    console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [listTodo, setListTodo] = useState(getLocalItems());

  const addList = (inputText) => {
    if (inputText.trim() !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listTodo));
  }, [listTodo]);

  ///dark mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") || "light"
  );

  const toggleDarkMode = () => {
    // setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode === "light") {
      setIsDarkMode("dark");
    } else {
      setIsDarkMode("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    document.body.className = isDarkMode;
  }, [isDarkMode]);

  return (
    <div className={`main_container ${isDarkMode}`}>
      <div className={`main_container_2 ${isDarkMode}`} >
      <i className="app__dark fa-solid fa-moon" onClick={toggleDarkMode}></i>
        <h1 className="app-heading">To-Do List</h1>
        <div className="center_container">
          <TodoInput className={`main_container ${isDarkMode}`}  addList={addList} />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
