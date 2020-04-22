import React from 'react';
import s from './Users.module.css';
import userphoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) pages = [...pages, i];
        return ( 
                <div>
                    <div> 
                       {pages.map(page => 
                            <span onClick = {() => {props.onPageChange(page)}} className = {props.currentPage === page && s.selectedPage}>  {page}  </span>)
                        }
                    </div>
                    {props.users.map(user => 
                    <div key = {user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src= {user.photos.small != null ? user.photos.small : userphoto}
                                    className = {s.usersPhoto} alt="kartinka face"
                                />
                                 </NavLink>
                            </div>
                            <div>
                                {user.followed ? 
                                <button disabled = {props.isFollowingInProgress.some(id => id === user.id)} type = "button" onClick = {() => {
                                    props.setFollowingInProgress(true, user.id);
                                    usersAPI.setUnFollow(user.id)
                                        .then(data => { if (data.resultCode === 0) props.unfollow(user.id);
                                            props.setFollowingInProgress(false, user.id);
                                        }
                                        )}}>
                                    UnFollow
                                </button>:
                                <button disabled = {props.isFollowingInProgress.some(id => id === user.id)} type = "button" onClick = {() => {
                                    props.setFollowingInProgress(true, user.id);
                                    usersAPI.setFollow(user.id)
                                        .then(data => { if (data.resultCode === 0) props.follow(user.id);
                                            props.setFollowingInProgress(false, user.id);
                                        })}}>
                                    Follow
                                </button>}  
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