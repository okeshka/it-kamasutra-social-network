import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({posts}) => {

// let posts = [
//     {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
//     {id: 2, message: 'Have a nice day', likesCount: 3}, 
//     {id:3, message: 'Good morning', likesCount: 5}, 
// ];

let postsElement =  posts.map ( number => 
                <Post key = {number.id} message = {number.message} likesCount = {number.likesCount} />
)

    return (
        <div className = {s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Huilo</textarea>
            </div>
            <div>
                <button type = "button">Add post</button>
            </div>
            <div className = {s.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;