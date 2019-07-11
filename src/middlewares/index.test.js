// Externals
import React from 'react';
import configureMockStore from 'redux-mock-store';

// Internals
import { Actions, raiseAction } from '../actions';
import middlewares, { saveWeatherData } from './index';

describe('Test Suite for middlewares', () => {

  let store;
  const mockStore = configureMockStore([middlewares]);

  beforeEach(() => {
    store = mockStore();
  });

  it('Should raise action to middleware', () => {
    store.dispatch(raiseAction(Actions.COMPONENT_INIT));
    expect(store.getActions()[0].type).toEqual(Actions.COMPONENT_INIT);
  });

  it('Should raise action to reducer to store weather data', async () => {
    await saveWeatherData(store);
    expect(store.getActions()[0].type).toEqual(Actions.FETCH_WEATHER_DATA_SUCCESS);
  });

});


