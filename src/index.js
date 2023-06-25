import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./state/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rendererEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
    </React.StrictMode>
  );
}

rendererEntireTree(store.getState());
store.subscribe(rendererEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
