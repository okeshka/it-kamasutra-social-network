import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hi, its my first post', likesCount: 2}, 
  {id: 2, message: 'Have a nice day', likesCount: 3}, 
  {id:3, message: 'Good morning', likesCount: 5}, 
];

let dialogs = [
  {id: 1, name: 'Oleshych'}, 
  {id: 2, name: 'Alex'}, 
  {id:3, name: 'Helga'}, 
  {id:4, name: 'Perdak'},
  {id:5, name: 'Cherdak'}
];

let messages = [
  {id: 1, message: 'Hi'}, 
  {id: 2, message: 'Pruvet'}, 
  {id:3, message: 'Yooo'}, 
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} posts = {posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
