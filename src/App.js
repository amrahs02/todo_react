import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import "./App.css";

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

  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    // for delete button
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(listTodo));
  }, [listTodo]);

  const myStyle2 = {
    backgroundColor: "#dee",
    margin: "auto",
    padding: "50px",
    borderRadius: "5px",
    color: "#000",
    minHeight: "30vh",
    width: "500px",
    position: "relative",
    top: "100px",
    display: "flex",
    alignItem: 'center',
    justifyContent: "center",
    flexDirection: "column",
 
      // Adding media query..
  };
  const myStyle3 = {
    margin: "10px",
    padding: "10px 2%",
    borderRadius: "5px",
    color: "black",
    '@media (max-width: 800px)': {
        width: '90%',
        backgroundColor : 'red'
    },
  };

  return (
    <>
      <div className="main_container" style={myStyle2}>
        <h1
          className="app-heading"
          style={myStyle3}
        >
          To-Do List
        </h1>
        <div className="center_container" >
          <TodoInput addList={addList} />
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
    </>
  );
}

export default App;
