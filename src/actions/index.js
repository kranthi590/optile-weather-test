export const Actions = {
  COMPONENT_INIT: 'COMPONENT_INIT',
  SET_WEATHER_DATA: 'SET_WEATHER_DATA'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
