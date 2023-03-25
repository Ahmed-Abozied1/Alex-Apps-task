import React, { useContext } from "react";
import "./Table.css";
import { DataContext } from "../../todosContext";

const Table = () => {
  console.log("Table");
  const { todosData, handleDeleteTodo,handleUpdate } = useContext(DataContext);

  return (
    <table>
      <thead>
        <tr className="tablerow">
          <th>Task</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todosData.length > 0 &&
          todosData.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.task}</td>
              <td> {todo.completed ? "Yes" : "No"}</td>
              <td>
                <button
                  className="addBtn"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="addBtn togglebtn"
                  onClick={() => handleUpdate(todo.id)}
                >
                  Toggle
                </button>
              </td>
             
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
