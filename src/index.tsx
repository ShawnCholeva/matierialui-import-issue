import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const bootstrapperElement: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
    <App />,
    bootstrapperElement);