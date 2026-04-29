import React from "react";
import Create from "./Create";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Task from "../Task";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="create_form">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => {
          return <Task key={todo._id} todo={todo} />;
        })
      )}
    </div>
  );
}

export default Home;
