import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.es6';

import App from './components/App.es6';

//const html = require('./index.html');

const html = require("html-loader!./index.html");
const less = require('./less/app.less');
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('app'));

//ReactDOM.render(<Menu />, document.getElementById('menu'));
//ReactDOM.render(<Shows store={store} />, document.getElementById('shows'));