import React from 'react';
import ReactDOM from 'react-dom';
import reactNode from './components/pages/Header';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
