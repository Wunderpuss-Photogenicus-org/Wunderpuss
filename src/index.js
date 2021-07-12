require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
    <App />, document.getElementById('root')
  );