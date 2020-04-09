import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App( props ) {
let {posts, newPostText} = props.state.profilePage;
let {messages, dialogs} = props.state.dialogsPage;
let {addPost, updateNewPostText} = props;

   return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = '/dialogs' render = { () => <Dialogs dialogs = {dialogs} messages = {messages}  /> } />
          <Route path = '/profile' render = { () => <Profile posts = {posts} addPost = {addPost} 
                                      newPostText = {newPostText} updateNewPostText = {updateNewPostText} /> } /> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
