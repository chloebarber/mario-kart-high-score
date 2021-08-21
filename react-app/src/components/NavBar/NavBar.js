import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import LogoutButton from '.././auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoUserLogin = async(e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));

  }

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <div className="nav-links">
        <NavLink to='/users' exact={true} activeClassName='active' className='all-users-link'>
          MK Racers!
        </NavLink>

        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active' className='user-profile-link'>
          My Profile
        </NavLink>

        <LogoutButton user={sessionUser} className='logout-button' />

      </div >
    )
  } else {
    sessionLinks = (
      <div className='logged-out-div'>
        <div className="nav-links">
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='sign-up-link'>
            Sign Up
          </NavLink>

          <NavLink to='/login' exact={true} activeClassName='active' className="login-link">
            Login
          </NavLink>

          <button className="demo-button" onClick={demoUserLogin}>Demo</button>

        </div>
      </div>
    )
  }

  return (
    <nav className="nav-bar-container">
      <div className="left-nav">
        <NavLink to='/' exact={true} activeClassName='active' className='home-link'>
          <img src="https://i.imgur.com/Fa4DmJZ.png" alt="baby-mario-logo" className="baby-mario-logo"/>
        </NavLink>
      </div>

      <div className="app-title-div">
        <a href="/"><h1 className="title-text">Mario Kart High Score</h1></a>
      </div>

      <div className="right-nav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
