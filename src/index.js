import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import { rootReducer } from './reducers/RRoot';

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
