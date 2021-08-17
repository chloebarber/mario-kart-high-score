import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '.././auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <nav className="nav-bar-container">

      <div className="home-link">
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
      </div>

      <div className="login-link">
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
      </div>

      <div className="sign-up-link">
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
      </div>

      <div className="users-link">
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
      </div>

      <div className="logout-button-link">
        <li>
          <LogoutButton user={sessionUser} />
          {/* {(sessionUser)? displaylogout: <Redirect to='/' />}
            </LogoutButton> */}
        </li>
      </div>


    </nav>
  );
}

export default NavBar;
