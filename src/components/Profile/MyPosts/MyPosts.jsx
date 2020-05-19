import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import { required, maxLength } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo( props => {
    
        let postsElement =  props.posts.map ( number => 
            <Post key = {number.id} message = {number.message} likesCount = {number.likesCount} />
        );

        let makePost = (values) => {
            props.addPost(values.newPostText);
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
    
})

const maxLength13 = maxLength(13);

const NewPost = props => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = {Textarea} name = 'newPostText' validate = {[required, maxLength13]}
                 placeholder = 'Мисье УЙ'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
} 

const NewPostReduxForm = reduxForm({form: 'NewPostForm'})(NewPost)

export default MyPosts;