import React from 'react';
import s from './Users.module.css';
import userphoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

const User = ({user, isFollowingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src= {user.photos.small != null ? user.photos.small : userphoto}
                            className = {s.usersPhoto} alt="kartinka face" />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? 
                        <button disabled = {isFollowingInProgress.some(id => id === user.id)} type = "button" 
                        onClick = {() => {unfollow(user.id) }}>
                            UnFollow
                        </button>:
                        <button disabled = {isFollowingInProgress.some(id => id === user.id)} type = "button" 
                        onClick = {() => {follow(user.id)}}>
                            Follow
                        </button>
                    }  
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </div>
    )
};

export default User;