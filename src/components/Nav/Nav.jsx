import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  //NAV bar at top
  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Picky Penguins</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>


        {user.id && (
          <>
            {/* MY LINKS */}
            {/* <Link className="navLink" to="/coloniesPage">
              View Colonies
            </Link> */}

            <Link className="navLink" to="/penguinList">
              View Penguins
            </Link>

            <Link className="navLink" to="/feedingList">
              View Feedings
            </Link>
            {/* END MY LINKS */}

            <Link className="navLink" to="/info">
              Info Page
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}


      </div>
    </div>
  );
}

export default Nav;
