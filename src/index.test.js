import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Test suite for Main App', () => {

  let store;

  beforeEach(() => {
    const mockStore = configureMockStore({ isLoading: false });
    store = mockStore();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});


