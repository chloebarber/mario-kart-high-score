import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  // const sessionUser = useSelector(state => state.session.user)
  // console.log(user)

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

  function timeConversion(time) {
    let minutes = 0;
    let seconds = 0;
    let ms = 0;

    minutes = Math.floor(time / 60000)
    time = time % 60000
    seconds = Math.floor(time / 1000)
    time = time % 1000
    ms = time

    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (ms < 10) {
      ms = `0${ms}`
    }
    else if (ms < 100) {
      ms = `${ms}0`
    }

    return `${minutes}:${seconds}:${ms}`
  }

  return (
    <>

      <div className="user-container">
        <div className="user-profile-header">
          <h2 className="user-headings">Profile</h2>
        </div>
        <div className="user-profile-content">
          <img className='pfp' src={user.user?.character_pfp} alt='pfp' />
          <div><strong>ID:</strong> {userId}</div>
          <div><strong>Username:</strong> {user.user?.username}</div>
          {/* <div><strong>Email</strong> {user.user?.email}</div> */}
          {/* <div><strong>Character</strong> {user.user?.character_pfp}</div> */}
          <div className="bio-quote">" {user.user?.bio} "</div>
        </div>

        <div className="user-record-header">
          <h2 className="user-headings">User records</h2>
        </div>
        <div className="user-record-div">
          {user.record && user.record.map(record => (
            <div className="Record">
              <a href={`/course/${record?.course_id}`}>
                <div>
                  {timeConversion(record?.time)} <span className="user-records-table">-</span> {record?.character}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="user-comment-div">
          <h2 className="user-headings">User Comments</h2>
        </div>
        <div className="user-comment-content">
          {user.comment && user.comment.map(comment => (
            <div className="comment">
              <a href={`/course/${comment?.course_id}`} >
                {comment?.content}
              </a>
            </div>
          ))}
        </div>
      </div >
    </>
  );
}
export default User;
