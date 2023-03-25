import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const BASE_URL = "http://localhost:4000";
export let DataContext = createContext([]);

export default function DataProvider(props) {
  console.log("Context");
  const [todosData, setTodosData] = useState([]);
  const [taskIsDelete, setTaskIsDelete] = useState("task");
  const [taskIsToggle, setTaskIsToggle] = useState("task");

  useEffect(() => {
    console.log("useEffect context");
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/todos`, {
        headers: {
          Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
        },
      });
      setTodosData(response.data);
    };
    fetchData();
  }, [taskIsDelete,taskIsToggle]);

  const handleAddTodo = async (event, taskName) => {
    event.preventDefault();
    if (taskName.current.value === "") {
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:4000/todos`,
        {
          task: taskName.current.value,
        },
        {
          headers: {
            Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
          },
        }
      );

      setTodosData([...todosData, response.data]);
      taskName.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = (id) => {
    axios
      .delete(`${BASE_URL}/todos/${id}`, {
        headers: {
          Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
        },
      })
      .then((response) => {
        console.log(response);
        setTaskIsDelete(`${id}:${response.data.message}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate=(id)=>{
    axios
      .put(`${BASE_URL}/todos/${id}`,{},{
        headers: {
          Authorization: `Basic enVja2VyOjEyMzQ1Ng==`,
        },
      })
      .then((response) => {
        console.log(response);
        setTaskIsToggle(`${id}:${response.data.completed}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <DataContext.Provider
      value={{
        todosData,
        handleAddTodo,
        handleDeleteTodo,
        handleUpdate,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
