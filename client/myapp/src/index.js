import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { userReducer } from './redux/Reducers/userReducer';

var store = createStore(
  userReducer
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);