export const Actions = {
  COMPONENT_INIT: 'COMPONENT_INIT'
};

export function raiseAction(type, payload) {
  return {
    type,
    payload
  };
}
