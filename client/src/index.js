import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css';

import { Provider } from 'react-redux'; //App보다 상단에서부터 밑에 있는 모든 아이들에게 State를 제공해주는 아이
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
  );