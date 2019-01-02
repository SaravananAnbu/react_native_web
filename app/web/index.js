console.log('Hello World');
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello World';

ReactDOM.render(
  <h1>{title}</h1>,
  document.getElementById('app')
);

module.hot.accept();