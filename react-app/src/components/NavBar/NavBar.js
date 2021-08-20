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
          All Users
        </NavLink>

        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active' className='user-profile-link'>
          User Profile
        </NavLink>

        <LogoutButton user={sessionUser} className='logout-button' />

      </div >
    )
  } else {
    sessionLinks = (
      <div className="nav-links">
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='sign-up-link'>
          Sign Up
        </NavLink>

        <NavLink to='/login' exact={true} activeClassName='active' className="login-link">
          Login
        </NavLink>

        <div className='demo-div'>
          <button className="demo-button" onClick={demoUserLogin}>Demo</button>
        </div>

      </div>
    )
  }

  return (
    <nav className="nav-bar-container">
      <div className="left-nav">
        <NavLink to='/' exact={true} activeClassName='active' className='home-link'>
          Home
        </NavLink>
      </div>
      <div className="right-nav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
