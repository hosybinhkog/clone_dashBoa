import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/index.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/theme.css';

import Layout from './components/layout/layout'
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

document.title = 'DashBoard';

const store = createStore(
  rootReducer,
)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

