import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '.././auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/users' exact={true} activeClassName='active' className='user-rankings-link'>
          User Rankings
        </NavLink>

        <LogoutButton user={sessionUser} className='logout-button' />

      </>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='sign-up-link'>
          Sign Up
        </NavLink>

        <NavLink to='/login' exact={true} activeClassName='active' className="login-link">
          Login
        </NavLink>

      </>
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
