import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App({dialogs, messages, posts}) {
   return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <Navbar />
        <div className = "app-wrapper-content">
          <Route path = '/dialogs' render = { () => <Dialogs dialogs = {dialogs} messages = {messages} /> } />
          <Route path = '/profile' render = { () => <Profile posts = {posts} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
