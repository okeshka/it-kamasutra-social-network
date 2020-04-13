import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({posts, dispatch, newPostText}) => {
    return (
        <div className = {s.content}>
            <ProfileInfo />
            <MyPostsContainer posts = {posts} newPostText = {newPostText} dispatch = {dispatch} />
        </div>
    )
}

export default Profile;