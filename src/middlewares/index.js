import { Actions, raiseAction } from '../actions';
import { getWeather } from '../services';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA));
      saveWeatherData(store);
      break;
  }
};

export const saveWeatherData = async (store) => {
  const response = await getWeather().catch((err) => {
    store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA_FAILURE, err));
  });
  if (response && response.cod === '200') {
    store.dispatch(raiseAction(Actions.FETCH_WEATHER_DATA_SUCCESS, response));
  }

};
