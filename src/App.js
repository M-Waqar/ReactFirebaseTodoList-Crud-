import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-5 shadow">
      <div className="p-5">
        <h1 className="text-center text-primary">
          Todo List With Firebase (Crud)
        </h1>
      </div>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
