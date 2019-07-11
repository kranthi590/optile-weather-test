import { Actions } from '../actions';
import { TEMP_TYPES } from '../constants';

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

const weatherData = (state = {}, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return {};
    case Actions.FETCH_WEATHER_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const currentTempType = (state = TEMP_TYPES.CELCIUS, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
    case Actions.FETCH_WEATHER_DATA_FAILURE:
      return TEMP_TYPES.CELCIUS;
    case Actions.CHANGE_TEMP_TYPE:
      return action.payload;
    default:
      return state;
  }
};

const currentIndex = (state = 1, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      return 1;
    case Actions.SET_CURRENT_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export default {
  isLoading,
  weatherData,
  currentTempType,
  currentIndex
};
