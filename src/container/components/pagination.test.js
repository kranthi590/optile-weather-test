// Externals
import React from 'react';

// Internals
import PaginationController from './pagination-controller';
import ReactDOM from 'react-dom';

describe('Test Suite for pagination controller component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <PaginationController classes={{}}/>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });


});
