import { CloudElementsType } from '../actions/actionType';

const initialState = {
  folderContent: []
};

export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case CloudElementsType.FETCH_FOLDER_CONTENT: {
      st = {
        ...state,
        folderContent: action.payload.folderContent
      };
      break;
    }
    default: {
      return st;
    }
  }
  return st;
}
