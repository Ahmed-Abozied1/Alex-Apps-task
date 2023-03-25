import React, {  useContext } from "react";
import "./Dashboard.css";
import Table from "../Table/Table";
import { useRef } from "react";
import { DataContext } from "../../todosContext";
const DashboardPage = () => {
   const {  handleAddTodo } = useContext(DataContext);
  console.log("DashboardPage");

  const taskName = useRef();

  return (
    <div>
      <div>
        <h2 className="title">DashBoard</h2>
        <Table />
        <form className="title" onSubmit={(event) => handleAddTodo(event, taskName)}>
          <input type="text" ref={taskName} />
          <button type="submit" className="logouotBtn">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
