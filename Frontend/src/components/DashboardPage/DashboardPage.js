import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import TodosTable from "../TodosTable/TodosTable";
const DashboardPage = ({ user }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/todos`, {
        headers: {
          Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
        },
      });
      setTodos(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/todos/${id}`, {
        headers: {
          Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
        },
      });
      setTodos(todos.filter(todo => todo.id !== id));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div>
      <div>
        <h2>Todos:</h2>
        <TodosTable todos={todos} onDelete={handleDeleteTodo} />
      </div>
      {todos.map((todo) => (
  <tr key={todo.id}>
    <td>{todo.task}</td>
    <td>{todo.completed ? "Done" : "Not done"}</td>
    <td>
      <button onClick={handleDeleteTodo}>Delete</button>
    </td>
  </tr>
))}

    </div>
  );
};

export default DashboardPage;
