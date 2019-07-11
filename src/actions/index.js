export const Actions = {
  COMPONENT_INIT: 'COMPONENT_INIT',
  FETCH_WEATHER_DATA: 'FETCH_WEATHER_DATA',
  FETCH_WEATHER_DATA_SUCCESS: 'FETCH_WEATHER_DATA_SUCCESS',
  FETCH_WEATHER_DATA_FAILURE: 'FETCH_WEATHER_DATA_FAILURE'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
