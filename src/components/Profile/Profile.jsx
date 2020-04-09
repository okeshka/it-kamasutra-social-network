import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from '../ProfileInfo/ProfileInfo';


const Profile = ({posts, addPost, newPostText, updateNewPostText}) => {
    return (
        <div className = {s.content}>
            <ProfileInfo />
            <MyPosts posts = {posts} addPost = {addPost} newPostText = {newPostText} updateNewPostText = {updateNewPostText}/>
        </div>
    )
}

export default Profile; 