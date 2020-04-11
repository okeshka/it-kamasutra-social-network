import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App( props ) {
let {posts, newPostText} = props.state.profilePage;
let {messages, dialogs, newMessageBody} = props.state.dialogsPage;
let {dispatch} = props;

   return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = '/dialogs' render = { () => <Dialogs newMessageBody = {newMessageBody} dialogs = {dialogs} 
                                                        dispatch = {dispatch} messages = {messages}  /> } />
          <Route path = '/profile' render = { () => <Profile posts = {posts} dispatch = {dispatch} 
                                                        newPostText = {newPostText} /> } /> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
