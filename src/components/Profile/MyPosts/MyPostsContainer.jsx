import React from 'react';
import {updateNewPostTextActionCreater, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({posts, dispatch, newPostText}) => {

    let makePost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostchange = text => {
        dispatch(updateNewPostTextActionCreater(text));
    };

    return (
        <MyPosts updateNewPostText = {onPostchange} addPost = {makePost} posts = {posts} newPostText = {newPostText}/>
    )
}

export default MyPostsContainer;