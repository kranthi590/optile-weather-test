// Internals
import reducers from './index';
import { Actions } from '../actions';

describe('Test Suite for reducers', () => {

  let state, action;

  beforeEach(() => {
    action = {
      type: Actions.COMPONENT_INIT
    };
    state = false;
  });

  it('Should return isLoading false when action is COMPONENT_INIT', () => {
    expect(reducers.isLoading(state, action)).toEqual(false);
  });

  it('Should return isLoading true when action is FETCH_WEATHER_DATA', () => {
    action.type = Actions.FETCH_WEATHER_DATA;
    expect(reducers.isLoading(state, action)).toEqual(true);
  });

  it('Should return isLoading false when action is FETCH_WEATHER_DATA_SUCCESS or FETCH_WEATHER_DATA_FAILURE', () => {
    action.type = Actions.FETCH_WEATHER_DATA_SUCCESS;
    expect(reducers.isLoading(state, action)).toEqual(false);
    action.type = Actions.FETCH_WEATHER_DATA_FAILURE;
    expect(reducers.isLoading(state, action)).toEqual(false);
  });

  it('Should return weatherData as `[]` when action is COMPONENT_INIT', () => {
    expect(reducers.weatherData(state, action).length).toEqual(0);
  });

  it('Should return weatherData with records when action is FETCH_WEATHER_DATA', () => {
    action = {
      type: Actions.FETCH_WEATHER_DATA_SUCCESS,
      payload: ['some_data']
    };
    expect(reducers.weatherData(state, action)).toEqual(['some_data']);
  });

  it('Should return same previous state for weatherData as `[]` and isLoading as false when unexpected action is raised', () => {
    action = {
      type: 'HAHA_ACTION'
    };
    state = ['some_data'];
    expect(reducers.weatherData(state, action)).toEqual(['some_data']);

    state = true;
    expect(reducers.isLoading(state, action)).toEqual(true);
  });

});


