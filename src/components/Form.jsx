import React, { useState } from "react";
import firebase from "../firebase";

const initialtodo = {
  title: "",
  complete: false,
};
const Form = () => {
  const [todo, setTodo] = useState(initialtodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref("TODO");
    dbRef.push(todo);
    setTodo(initialtodo);
  };
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Todo Item</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              placeholder="Enter Todo Here"
            />
          </div>
        </div>
        <button className="btn btn-outline-primary">Add</button>
      </form>
    </div>
  );
};

export default Form;
