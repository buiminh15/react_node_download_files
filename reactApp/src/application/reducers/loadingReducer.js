import { LoadingType } from '../actions/actionType';

const initialState = {
  isLoading: false
};

export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case LoadingType.SET_IS_LOADING: {
      st = { ...state, isLoading: true };
      break;
    }
    case LoadingType.RESET_IS_LOADING: {
      st = { ...state, isLoading: false };
      break;
    }
    default: {
      return st;
    }
  }
  return st;
}
