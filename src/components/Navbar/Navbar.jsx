import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = {s.nav}>
        <div className = {s.item}>
          <NavLink to = "/profile" activeClassName = {s.activeLink}>Profile</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/dialogs" activeClassName = {s.activeLink}>Messages</NavLink>
        </div>
        <div className = {s.item}>
          <NavLink to = "/users" activeClassName = {s.activeLink}>Users</NavLink>
        </div>
        <div className = {s.item}>
          <a href = "#3">News</a>
        </div>
        <div className = {s.item}>
          <a href = "#4">Music</a>
        </div>
        <div className = {s.item}>
          <a href = "#5">Setings</a>
        </div>
      </nav>
    )
}

export default Navbar;