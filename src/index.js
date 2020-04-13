import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import {Provider} from './StoreContext';

let renderEntireTree = (state) => {
  //console.log(state);
    ReactDOM.render(
      <React.StrictMode>
        <Provider store = {store}>
          <App />
        </Provider>
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