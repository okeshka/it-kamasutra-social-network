import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreater, addPostActionCreator} from '../../../redux/profile-reducer';

const MyPosts = ({posts, dispatch, newPostText}) => {

    let postsElement =  posts.map ( number => 
        <Post key = {number.id} message = {number.message} likesCount = {number.likesCount} />
    );
    let newPost = React.createRef();

    let makePost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostchange = () => {
        dispatch(updateNewPostTextActionCreater(newPost.current.value));
    };

            return (
            <div className = {s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea ref = {newPost} value = {newPostText} onChange = {onPostchange}  />
                </div>
                <div>
                    <button type = "button" onClick = {makePost}>Add post</button>
                </div>
                <div className = {s.posts}>
                    { postsElement }
                </div>
            </div>
        )
}

export default MyPosts;