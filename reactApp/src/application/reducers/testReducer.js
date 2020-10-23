import { ActionType } from '../actions/actionType';

const initialState = {
  reduxWorking: false
};

export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case ActionType.TEST_ACTIONTYPE: {
      st = {
        ...state,
        reduxWorking: action.payload
      };
      break;
    }
    default: {
      return st;
    }
  }
  return st;
}
