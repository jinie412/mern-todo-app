import React from "react";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function Task({ todo }) {
  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDel = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="task">
      <div className="checkbox" onClick={() => handleEdit(todo._id)}>
        {todo.done ? (
          <BsFillCheckCircleFill className="icon" />
        ) : (
          <BsCircleFill className="icon" />
        )}

        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
      </div>
      <div onClick={() => handleDel(todo._id)}>
        <span>
          <BsFillTrashFill className="icon" />
        </span>
      </div>
    </div>
  );
}
