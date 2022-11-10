import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App/App';
import reducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
