import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App/App';
import reducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function loggerMiddleware(store: any): any {
  return function (next: any) {
    return function (action: any) {
      const result = next(action);
      console.log('Middleware', store.getState());
      return result;
    };
  };
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
