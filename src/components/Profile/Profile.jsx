import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from '../ProfileInfo/ProfileInfo';


const Profile = ({posts, dispatch, newPostText}) => {
    return (
        <div className = {s.content}>
            <ProfileInfo />
            <MyPosts posts = {posts} newPostText = {newPostText} dispatch = {dispatch} />
        </div>
    )
}

export default Profile; 