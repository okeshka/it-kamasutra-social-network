import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';


const MyPosts = ({posts, addPost }) => {

    let postsElement =  posts.map ( number => 
        <Post key = {number.id} message = {number.message} likesCount = {number.likesCount} />
    );

    let makePost = (values) => {
        addPost(values.newPostText);
    };
            return (
            <div className = {s.postsBlock}>
                <h3>My posts</h3>
                <NewPostReduxForm onSubmit = {makePost}/>
                <div className = {s.posts}>
                    { postsElement }
                </div>
            </div>
        )
}

const NewPost = props => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = 'textarea' name = 'newPostText' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
} 

const NewPostReduxForm = reduxForm({form: 'NewPostForm'})(NewPost)

export default MyPosts;