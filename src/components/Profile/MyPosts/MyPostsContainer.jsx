import React from 'react';
import {updateNewPostTextActionCreater, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return <StoreContext.Consumer> 
        {   // фигурная скобка обязательно с новой строки
            (store) => {
                let state = store.getState().profilePage;
                let makePost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostchange = text => {
                    store.dispatch(updateNewPostTextActionCreater(text));
                };

                return (
                    <MyPosts updateNewPostText = {onPostchange} addPost = {makePost} 
                        posts = {state.posts} newPostText = {state.newPostText}
                    />
                )
            }
        }
    </ StoreContext.Consumer>
}

export default MyPostsContainer;