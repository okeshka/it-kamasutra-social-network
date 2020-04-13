import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ({posts, updateNewPostText, addPost, newPostText}) => {

    let postsElement =  posts.map ( number => 
        <Post key = {number.id} message = {number.message} likesCount = {number.likesCount} />
    );
    let newPost = React.createRef();

    let makePost = () => {
        addPost();
    };

    let onPostchange = () => {
        let text = newPost.current.value;
        updateNewPostText(text);
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