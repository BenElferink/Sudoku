import React from 'react';
import ReactDOM from 'react-dom';
import { MatrixProvider } from './js/matrixContextAPI';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MatrixProvider>
      <App />
    </MatrixProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
