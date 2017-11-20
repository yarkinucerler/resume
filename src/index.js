import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

import './assets/styles/style.scss';

function component() {
    let element = document.createElement('div');
    element.setAttribute('id', 'app');
    return element;
}

document.body.appendChild(component());

ReactDOM.render(<App />, document.getElementById('app'));
