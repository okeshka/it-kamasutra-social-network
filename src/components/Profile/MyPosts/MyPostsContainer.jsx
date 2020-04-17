//import React from 'react';
import {updateNewPostTextActionCreater, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//     return <StoreContext.Consumer> 
//         {   // фигурная скобка обязательно с новой строки
//             (store) => {
//                 let state = store.getState().profilePage;
//                 let makePost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 let onPostchange = text => {
//                     store.dispatch(updateNewPostTextActionCreater(text));
//                 };

//                 return (
//                     <MyPosts updateNewPostText = {onPostchange} addPost = {makePost} 
//                         posts = {state.posts} newPostText = {state.newPostText}
//                     />
//                 )
//             }
//         }
//     </ StoreContext.Consumer>
// }

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => {
            dispatch(updateNewPostTextActionCreater(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }    
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;