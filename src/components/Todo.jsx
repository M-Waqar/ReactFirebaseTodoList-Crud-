import React from "react";
import firebase from "../firebase";

const Todo = ({ todo }) => {
  const handleComplete = () => {
    const dbRef = firebase.database().ref("TODO").child(todo.id);
    dbRef.update({
      complete: !todo.complete,
    });
  };

  const handleDelete = (id) => {
    const dbRef = firebase.database().ref("TODO").child(id);
    dbRef.remove();
  };

  return (
    <div
      className={todo.complete ? "alert alert-success" : "alert alert-primary"}
      role="alert"
    >
      {todo.title}
      <span className="float-right">
        <button onClick={handleComplete} className="btn btn-sm btn-light mr-2">
          Complete
        </button>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-sm btn-light mr-2"
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default Todo;
