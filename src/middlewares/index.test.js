// Externals
import React from 'react';
import configureMockStore from 'redux-mock-store';

// Internals
import { raiseAction, Actions } from '../actions';

describe('Test Suite for middlewares', () => {

  let store;
  const mockStore = configureMockStore({ isLoading: false });

  beforeEach(() => {
    store = mockStore();
  });


  it('Should raise action to reducer to store weather data', () => {
    //  store.dispatch(raiseAction(Actions.SET_WEATHER_DATA));
    expect(store.getActions()[0].type).toEqual(Actions.SET_WEATHER_DATA);
  });

});


