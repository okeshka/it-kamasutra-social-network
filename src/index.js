import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';

let renderEntireTree = (state) => {
  console.log(state);
    ReactDOM.render(
      <React.StrictMode>
        <App state = {state} dispatch = {store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    )
}

renderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  renderEntireTree(state);
});

//export default renderEntireTree;