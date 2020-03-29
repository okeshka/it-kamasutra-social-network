import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>Huilo</textarea>
                <button type = "button">Add post</button>
            </div>
            <div className = {s.posts}>
                <Post message = "Hi, its my first post" likesCount = "4"/>
                <Post message = "Have a nice day" likesCount = "5"/>
                <Post message = "Good morning" likeCount = "3"/>
            </div>
        </div>
    )
}

export default MyPosts;