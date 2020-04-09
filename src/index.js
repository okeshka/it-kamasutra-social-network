import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './redux/state';
import {addPost, updateNewPostText, subcribe} from './redux/state';
import App from './App';

let renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderEntireTree(state);
subcribe(renderEntireTree);

//export default renderEntireTree;