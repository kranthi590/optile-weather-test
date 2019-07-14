import { Actions, raiseAction } from '../actions';
import { getWeather } from '../services';
import { transformWeatherData } from '../utils';
import { API_URL } from '../constants';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA));
      saveWeatherData(store, API_URL);
      break;
  }
};

export const saveWeatherData = async (store, url) => {
  const response = await getWeather(url).catch((err) => {
    store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA_FAILURE, err));
  });
  if (response && response.cod === '200') {
    const weatherData = transformWeatherData(response);
    store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA_SUCCESS, weatherData));
  }

};
