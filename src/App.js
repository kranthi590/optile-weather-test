import React, { Component } from 'react';
import { Provider } from 'react-redux';
import WeatherContainer from './container';
import createStore from './store';

const store = createStore();

export default class Dashboard extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    );
  }
}
