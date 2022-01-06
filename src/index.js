import React from 'react';
import ReactDOM from 'react-dom';

import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from './componenrs/GlobalStyle/GlobalStyle.styled';
import './index.css';

import { App } from './componenrs/App/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
