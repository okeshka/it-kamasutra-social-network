import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = {s.header}>
        <img src = "https://img.pngio.com/capital-letter-z-transparent-png-stickpng-png-that-begins-with-letter-z-1271_1280.png" alt = "sociall network" />
        
        <div className = {s.loginBlock}>
           {props.isAuth ? props.login : <NavLink to = {'/login'}>Login</NavLink>}
        </div>
        </header>
    )
}

export default Header;