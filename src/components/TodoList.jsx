import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Todo from "./Todo";
const TodoList = () => {
  const [todolist, setTodoList] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref("TODO");
    dbRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todolist = [];
      for (let id in todos) {
        todolist.push({ id, ...todos[id] });
      }
      setTodoList(todolist);
    });
  }, []);
  return (
    <div className="container p-5">
      {todolist &&
        todolist.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  );
};

export default TodoList;
