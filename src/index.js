import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { reducers } from './reducers';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
