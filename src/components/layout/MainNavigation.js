import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation(props) {
  return (
    <header>
      <div className={classes.header}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All the meetups</Link>
          </li>
          <li>
            <Link to="/newmeetup">Add new meetups</Link>
          </li>
          <li>
            <Link to="/fav">Fav</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
