import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { ActionCableProvider } from 'react-actioncable-provider'
import store from './redux/store'
import { API_WS_ROOT } from './constants/constants'

ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url={ API_WS_ROOT }>
      <App />
    </ActionCableProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
