import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./LoginPage.css";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (event) => {
    setSelectedUser(+event.target.value);
    const userName = users.find(
      (user) => user.id === +event.target.value
    ).username;
    setSelectedName(userName);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post(
        "http://localhost:4000/todos",
        {},
        {
          auth: {
            username: selectedName,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const userData = users.filter((user) => user.id === selectedUser);

        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderUsers = () => {
    return users.map((user) => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ));
  };

  const fetchUsers = () => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            {selectedUser ? (
              <div>
                <p>
                  Name: {users.find((user) => user.id === selectedUser).name}
                </p>
                <img
                  src={users.find((user) => user.id === selectedUser).avatar}
                  alt="avatar"
                  style={{ width: "50px" }}
                />
              </div>
            ) : (
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            )}
          </h4>
          <div className="image"></div>
        </div>
        <select onChange={handleUserChange}>
          <option value="">Select user</option>
          {renderUsers()}
        </select>

        <div className="body-form">
          <form>
            <div className="input-group mb-3"></div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
            <button
              onClick={handleLogin}
              type="button"
              className="btn btn-secondary btn-block"
            >
              LOGIN
            </button>
            <button
              onClick={fetchUsers}
              type="button"
              className="btn btn-secondary btn-block"
            >
              Choose User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;
