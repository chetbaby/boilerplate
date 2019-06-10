import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';

render(
  <div>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider>, */}
  </div>,
  document.getElementById('root')
);
