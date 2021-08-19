import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  // const sessionUser = useSelector(state => state.session.user)
  console.log(user)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  function timeConversion(time){
    let minutes = 0;
    let seconds = 0;
    let ms = 0;

    minutes = Math.floor(time/60000)
    time = time % 60000
    seconds = Math.floor(time/1000)
    time = time % 1000
    ms = time

    if (minutes < 10){
        minutes = `0${minutes}`
    }
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    if (ms < 10){
        ms = `0${ms}`
    }
    else if (ms < 100){
        ms = `${ms}0`
    }

    return `${minutes}:${seconds}:${ms}`
}

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.user?.username}
      </li>
      <li>
        <strong>Email</strong> {user.user?.email}
      </li>
      <li>
        <strong>Character</strong> {user.user?.character_pfp}
      </li>
      <li>
        <strong>bio</strong> {user.user?.bio}
      </li>
      <h2>User Comments</h2>
      {user.comment && user.comment.map(comment => (
        <div className="comment">
          <div>{comment.content} {comment.course_id}</div>
        </div>
      ))}
      <h2>User records</h2>
      {user.record && user.record.map(record => (
        <div className="record">
          <div>{timeConversion(record.time)} {record.course_id}</div>
        </div>
      ))}
    </ul>
  );
}
export default User;
