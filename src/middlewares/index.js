import { Actions} from '../actions';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case Actions.COMPONENT_INIT:
      break;
  }
};

