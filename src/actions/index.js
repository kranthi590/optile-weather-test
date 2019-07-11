export const Actions = {
  COMPONENT_INIT: 'COMPONENT_INIT',
  FETCH_WEATHER_DATA: 'FETCH_WEATHER_DATA',
  FETCH_WEATHER_DATA_SUCCESS: 'FETCH_WEATHER_DATA_SUCCESS',
  FETCH_WEATHER_DATA_FAILURE: 'FETCH_WEATHER_DATA_FAILURE',
  CHANGE_TEMP_TYPE: 'CHANGE_TEMP_TYPE',
  SET_CURRENT_INDEX: 'SET_CURRENT_INDEX'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
