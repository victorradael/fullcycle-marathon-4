import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./services/api";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();

  async function getUsers() {
    const response = await api.get("/users");

    const listOfUsers = response.data.data;

    setUsers(listOfUsers);
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        {users?.map((user) => {
          return (
            <div key={user.id} className="User-Card">
              <img src={user.avatar} alt={user.first_name} />
              <div>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          );
        })}
      </body>
    </div>
  );
};

export default App;
