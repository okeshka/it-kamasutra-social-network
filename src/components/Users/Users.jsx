import React from 'react';
import s from './Users.module.css';
import Axios from 'axios';
import userphoto from '../../assets/img/user.png';

let Users = (props) => {
    let showUsers = () => {
        if (props.users.length === 0) {
            Axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => props.setUser(responce.data.items));
        }
    }
    return ( 
        <div>
            <button type = "button" onClick = {showUsers}>Download users</button>
            {props.users.map(user => 
            <div key = {user.id}>
                <span>
                    <div>
                        <img src= {user.photos.small != null ? user.photos.small : userphoto}
                            className = {s.usersPhoto} alt="kartinka face"
                        />
                    </div>
                    <div>
                        {user.followed ? 
                        <button type = "button" onClick = {() => {props.unfollow(user.id)}}>UnFollow</button>:
                        <button type = "button" onClick = {() => {props.follow(user.id)}}>Follow</button>}  
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
            </div>)}
        </div>
    )
}

export default Users;