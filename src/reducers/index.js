import { Actions } from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      return false;
    default:
      return state;
  }
};

export default {
  isLoading
};
