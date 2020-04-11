import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';

let renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} dispatch = {store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    )
}

renderEntireTree(store.getState());
store.subcribe(renderEntireTree);

//export default renderEntireTree;