import { combineReducers } from 'redux';
import testReducer from './testReducer';
import loadingReducer from './loadingReducer';
import CloudElementsReducer from './CloudElementsReducer';

export default combineReducers({
  testReducer,
  loadingReducer,
  CloudElementsReducer
});
