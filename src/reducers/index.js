import { Actions } from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      return false;
    case Actions.FETCH_WEATHER_DATA:
      return true;
    case Actions.FETCH_WEATHER_DATA_SUCCESS:
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return false;
    default:
      return state;
  }
};

const weatherData = (state = [], action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return [];
    case Actions.FETCH_WEATHER_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default {
  isLoading,
  weatherData
};
