import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu.es6';
import Shows from './components/Shows.es6';

const less = require('./less/app.less');

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Shows />, document.getElementById('shows'));