import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UsersList.css'

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink className="user-link" to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <div className="user-list-div">
      <div className="start-img-div">
        <img src="https://www.pinclipart.com/picdir/big/201-2015536_mario-kart-8-deluxe-mario-kart-lakitu-png.png" alt="lakitu-start" className="start-img"/>
      </div>

      <div className="mk-racers-text-div">
        <h1 className="mk-racers-text">Mario Kart Racers!: </h1>
      <ul>{userComponents}</ul>
      </div>
    </div>
  );
}

export default UsersList;
